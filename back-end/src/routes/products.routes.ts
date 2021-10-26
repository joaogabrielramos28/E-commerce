import { Router } from 'express';
import { getCustomRepository, ObjectLiteral } from 'typeorm';
import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateProductService';
import uploadConfig from '../config/upload';
import multer from 'multer';
const productsRouter = Router();

const upload = multer(uploadConfig);

productsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = await productsRepository.find();
  return response.json(products);
});

productsRouter.post('/', upload.array('image', 3), async (request, response) => {
  const { name, price, category } = request.body;
  const images = request?.files;

  const arrayImages:Array<string> = [];

  images?.map<void>((image:ObjectLiteral) => {
    arrayImages.push(image.originalname);
  });

  // console.log(arrayImages);

  // console.log(name, price, category);

  // console.log('images', images);

  const createProduct = new CreateProductService();
  const product = await createProduct.execute({
    name,
    price,
    images: arrayImages,
    category
  });

  return response.json(product);
});

export default productsRouter;
