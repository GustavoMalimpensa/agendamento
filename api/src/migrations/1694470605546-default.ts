import { MigrationInterface, QueryRunner } from "typeorm";

export class default1694470605546 implements MigrationInterface {
    name = 'default1694470605546'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "calendar_event" ("id" SERIAL NOT NULL, "content" text NOT NULL, "date" date NOT NULL, "time" TIME NOT NULL, "timestamp" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_176fe24e6eb48c3fef696c7641f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "calendar_event" ADD CONSTRAINT "FK_791a98103dd3b4cb694b254b972" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "calendar_event" DROP CONSTRAINT "FK_791a98103dd3b4cb694b254b972"`);
        await queryRunner.query(`DROP TABLE "calendar_event"`);
    }

}
