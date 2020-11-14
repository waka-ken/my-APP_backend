import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItem1605236377805 implements MigrationInterface {
    name = 'CreateItem1605236377805'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `item` (`id` int NOT NULL AUTO_INCREMENT, `todo` varchar(255) NOT NULL, `done` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `item`");
    }

}
