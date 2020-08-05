import { UseCaseOutput } from "usecases/useCase";
import { Procedure } from "entities/medicalProcedure/procedure";

export class ConvertSourceIntoProcedureUseCaseOutputDto implements UseCaseOutput {
    procedures: Procedure[]
    success: boolean = false

    constructor() {
        this.procedures = []
    }
}