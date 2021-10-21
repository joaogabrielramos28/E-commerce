import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class orders1634779142128 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'orders',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'product_id',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'user_id',
          type: 'varchar',
          isNullable: true
        }
      ]
    })
    );
    await queryRunner.createForeignKey('orders', new TableForeignKey({
      name: 'productProvider',
      columnNames: ['product_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'products',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
    await queryRunner.createForeignKey('orders', new TableForeignKey({
      name: 'userProvider',
      columnNames: ['user_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'users',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    }));
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('orders', 'userProvider');
    await queryRunner.dropForeignKey('orders', 'productProvider');
    await queryRunner.dropTable('products');
  }
}
