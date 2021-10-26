import { getCustomRepository } from 'typeorm';
import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';
interface Request {
    name: string;
    price: string;
    images?:Array<string>;
    category: string;
    mainImage?:string;
}
;

class CreateProductService {
  public async execute ({ name, price, images, category, mainImage }:Request): Promise<Product | null> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = productsRepository.create({
      name,
      price,
      images,
      category,
      mainImage
    });
    await productsRepository.save(product);
    return product;
  }
}

export default CreateProductService
;
