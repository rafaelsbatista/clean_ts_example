export enum VALUE_TYPE {
    ARRAY,
    FALSE,
    NULL,
    NUMBER,
    OBJECT,
    STRING,
    TRUE
}

export interface JsonStructure {
    getValueType: () => VALUE_TYPE
}