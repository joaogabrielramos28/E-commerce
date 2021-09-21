import Product from '../models/Product';
import { EntityRepository, Repository } from 'typeorm'
;

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async findByName (name: String): Promise<Product | null> {
    const findProduct = await this.findOne({
      where: { name }
    });

    return findProduct || null;
  }
}

export default ProductsRepository;
