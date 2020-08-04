import { JsonStructure, VALUE_TYPE } from "./jsonStructure";

export class JsonString extends String implements JsonStructure {
    getValueType() {
        return VALUE_TYPE.STRING
    }
}