import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateProducts1632179927489 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'product_name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'price',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'images',
            type: 'varchar',
            isNullable: false,
            isArray: true
          },
          {
            name: 'category',
            type: 'varchar',
            isNullable: false
          }
        ]
      })
    );
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
