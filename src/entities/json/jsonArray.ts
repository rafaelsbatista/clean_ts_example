import { JsonStructure, VALUE_TYPE } from "./jsonStructure";

export class JsonArray implements JsonStructure {
    array: Array<JsonStructure>

    constructor(array: Array<JsonStructure>) {
        this.array = array
    }

    getValueType() {
        return VALUE_TYPE.ARRAY
    }

    getArray(): Array<JsonStructure> {
        return this.array
    }
}