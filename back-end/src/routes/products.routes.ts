import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ProductsRepository from '../repositories/ProductsRepository';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  const productsRepository = getCustomRepository(ProductsRepository);
  const products = await productsRepository.find();
  return response.json(products);
});

productsRouter.post('/', async (request, response) => {
  const { name, price, images, category } = request.body;
  console.log(name, price, images, category);

  const createProduct = new CreateProductService();

  const product = await createProduct.execute({
    name,
    price,
    category,
    images
  });

  return response.json(product);
});

export default productsRouter;
