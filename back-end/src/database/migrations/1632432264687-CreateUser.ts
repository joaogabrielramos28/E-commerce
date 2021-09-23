import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUser1632432264687 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'varchar',
          isPrimary: true,
          generationStrategy: 'uuid',
          default: 'uuid_generate_v4()'
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
          isNullable: false
        },
        {
          name: 'password',
          type: 'varchar',
          isNullable: false
        },
        {
          name: 'age',
          type: 'int',
          isNullable: false
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: false
        }

      ]
    }));
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
