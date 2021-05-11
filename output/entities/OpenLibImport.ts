import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("open_lib_import_pkey", ["id"], { unique: true })
@Entity("open_lib_import", { schema: "public" })
export class OpenLibImport {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "type", nullable: true })
  type: string | null;

  @Column("text", { name: "key", nullable: true })
  key: string | null;

  @Column("text", { name: "revision", nullable: true })
  revision: string | null;

  @Column("text", { name: "last_modified", nullable: true })
  lastModified: string | null;

  @Column("json", { name: "json_bin", nullable: true })
  jsonBin: object | null;
}
