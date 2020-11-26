import {MigrationInterface, QueryRunner} from "typeorm";

export class createDto1606279601357 implements MigrationInterface {
    name = 'createDto1606279601357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `item` (`id` int NOT NULL AUTO_INCREMENT, `todo` varchar(255) NOT NULL, `done` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `age` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
        await queryRunner.query("DROP TABLE `item`");
    }

}
