import { UseCase } from "../useCase";
import { ConvertSourceIntoProcedureUseCaseInputDto } from "./data/convertSourceIntoProcedureUseCaseInputDto";
import { ConvertSourceIntoProcedureUseCaseOutputDto } from './data/convertSourceIntoProcedureUseCaseOutputDto';

export class ConvertSourceIntoProcedureUseCase implements UseCase<ConvertSourceIntoProcedureUseCaseInputDto, ConvertSourceIntoProcedureUseCaseOutputDto> {

    async execute (input: ConvertSourceIntoProcedureUseCaseInputDto) {
        return new ConvertSourceIntoProcedureUseCaseOutputDto()
    }
}