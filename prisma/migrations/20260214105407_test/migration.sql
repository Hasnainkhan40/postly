-- AlterTable
CREATE SEQUENCE test_id_seq;
ALTER TABLE "Test" ALTER COLUMN "id" SET DEFAULT nextval('test_id_seq');
ALTER SEQUENCE test_id_seq OWNED BY "Test"."id";
