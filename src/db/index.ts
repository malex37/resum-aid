import Dexie, { Table } from "dexie";
import { DbEntry } from "@/db/DbEntry";
export class DocumentIdb extends Dexie {
  documentStorage !: Table<DbEntry>;
  constructor() {
    super("DocumentStorage");
    this.version(1).stores({
      documentStorage: '',
    });
  }
}

export const DocumentDb = new DocumentIdb();