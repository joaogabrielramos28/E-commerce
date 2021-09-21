import { getCustomRepository } from 'typeorm';
import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
    productName: String,
    price: String,
    images: Array<String>,
    category: String
}
;

class CreateProductService {
  public execute ({ productName, price, images, category }:Request):Product {
    const productsRepository = getCustomRepository(ProductsRepository);
    const getProductByName = productsRepository.findByName(productName);
  }
}

export default CreateProductService
;
