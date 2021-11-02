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
  const name = request.query.name;

  if (name) {
    const product = await productsRepository.findByName(name);
    return response.json(product);
  } else {
    const products = await productsRepository.find();
    return response.json(products);
  }
});

productsRouter.post('/', upload.array('image', 4), async (request, response) => {
  const { name, price, category } = request.body;
  const images = request?.files;
  const arrayImages:Array<string> = [];
  // eslint-disable-next-line prefer-const
  let main = '';
  // eslint-disable-next-line array-callback-return
  images?.map<void>((image:ObjectLiteral, index:number) => {
    if (index === 0) {
      main = image.filename;
    }
    arrayImages.push(image.filename);
  });

  const createProduct = new CreateProductService();
  const product = await createProduct.execute({
    name,
    price,
    images: arrayImages,
    category,
    mainImage: main
  });

  return response.json(product);
});

export default productsRouter;
