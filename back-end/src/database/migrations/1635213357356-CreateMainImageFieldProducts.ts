import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class CreateMainImageFieldProducts1635213357356 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('products', new TableColumn({
      name: 'mainImage',
      type: 'varchar',
      isNullable: true
    }));
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('products', 'mainImage');
  }
}
