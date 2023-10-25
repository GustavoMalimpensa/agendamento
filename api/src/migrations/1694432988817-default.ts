import { MigrationInterface, QueryRunner } from "typeorm";

export class default1694432988817 implements MigrationInterface {
    name = 'default1694432988817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "photoUrl" text, "timestamp" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "scheduling" ("id" SERIAL NOT NULL, "content" text NOT NULL, "date" date NOT NULL, "time" TIME NOT NULL, "service" text NOT NULL, "timestamp" date NOT NULL DEFAULT now(), "user_id" integer NOT NULL, CONSTRAINT "PK_a19510fdc2c3f1c9daff8b6e395" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "scheduling" ADD CONSTRAINT "FK_d695f7e445ac7d1645078b5d2c4" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "scheduling" DROP CONSTRAINT "FK_d695f7e445ac7d1645078b5d2c4"`);
        await queryRunner.query(`DROP TABLE "scheduling"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
