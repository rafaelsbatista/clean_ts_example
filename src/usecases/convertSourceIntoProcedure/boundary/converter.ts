import { JsonObjectIterator } from "entities/iterator/jsonObjectIterator";
import { Procedure } from "entities/medicalProcedure/procedure";
import { JsonStructure } from "entities/json/jsonStructure";

export interface Converter {
    convert(json: JsonStructure) : Procedure
}