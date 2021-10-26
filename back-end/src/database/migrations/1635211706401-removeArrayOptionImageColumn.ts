import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class removeArrayOptionImageColumn1635211706401 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('products', 'images', new TableColumn({
      name: 'images',
      type: 'varchar',
      isNullable: false,
      isArray: false
    }));
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn('products', 'images', new TableColumn({
      name: 'images',
      type: 'varchar',
      isNullable: false,
      isArray: true
    }));
  }
}
