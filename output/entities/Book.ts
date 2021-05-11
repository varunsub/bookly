import { Column, Entity } from "typeorm";

@Entity("book", { schema: "public" })
export class Book {
  @Column("integer", { name: "id", nullable: true })
  id: number | null;

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
