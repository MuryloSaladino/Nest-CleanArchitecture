import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1741914470636 implements MigrationInterface {
    name = 'Migration1741914470636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "games" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "name" character varying NOT NULL, "year" integer NOT NULL, "description" text NOT NULL, CONSTRAINT "PK_c9b16b62917b5595af982d66337" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "plays" ("userId" uuid NOT NULL, "gameId" uuid NOT NULL, CONSTRAINT "PK_a5a0e9f6dc261bed10189d967ad" PRIMARY KEY ("userId", "gameId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "username" character varying(20) NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "plays" ADD CONSTRAINT "FK_b5b4d1aa95f173de041e504309b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "plays" ADD CONSTRAINT "FK_e35f5d088af2f5908af8553480a" FOREIGN KEY ("gameId") REFERENCES "games"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "plays" DROP CONSTRAINT "FK_e35f5d088af2f5908af8553480a"`);
        await queryRunner.query(`ALTER TABLE "plays" DROP CONSTRAINT "FK_b5b4d1aa95f173de041e504309b"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "plays"`);
        await queryRunner.query(`DROP TABLE "games"`);
    }

}
