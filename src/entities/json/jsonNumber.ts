import { JsonStructure, VALUE_TYPE } from "./jsonStructure";

export class JsonNumber extends Number implements JsonStructure {
    getValueType() {
        return VALUE_TYPE.NUMBER
    }

}