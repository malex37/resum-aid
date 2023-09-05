import { DocumentDb } from "@/db";
import { DbEntry } from "@/db/DbEntry";

export async function loadStored(): Promise<DbEntry[]> {
  const documents = await DocumentDb.documentStorage.toArray();
  return documents;
}