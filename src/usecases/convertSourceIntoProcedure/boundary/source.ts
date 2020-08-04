import { JsonStructure } from "entities/json/jsonStructure";

export interface Source {
    getReadStream: () => ReadableStream<JsonStructure>
}