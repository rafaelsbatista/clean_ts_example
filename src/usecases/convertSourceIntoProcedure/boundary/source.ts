import { Readable } from 'stream'
import { JsonStructure } from "entities/json/jsonStructure";

export interface Source {
    getReadStream: () => Readable
}