import {MigrationInterface, QueryRunner} from "typeorm";

export class createItem1604755103733 implements MigrationInterface {
    name = 'createItem1604755103733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `item` (`id` int NOT NULL AUTO_INCREMENT, `todo` varchar(255) NOT NULL, `limit` datetime NOT NULL, `idDone` tinyint NOT NULL DEFAULT 0, `deletePassword` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `item`");
    }

}
