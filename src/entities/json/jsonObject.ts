import { JsonStructure, VALUE_TYPE } from "./jsonStructure";

export class JsonObject extends Map<string, JsonStructure> implements JsonStructure  {

    getValueType() {
        return VALUE_TYPE.OBJECT
    }
}