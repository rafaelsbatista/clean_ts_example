import { UseCase } from "../useCase";
import { ConvertSourceIntoProcedureUseCaseInputDto } from "./data/convertSourceIntoProcedureUseCaseInputDto";
import { ConvertSourceIntoProcedureUseCaseOutputDto } from './data/convertSourceIntoProcedureUseCaseOutputDto';
import { Source } from "./boundary/source";
import { Converter } from "./boundary/converter";

export class ConvertSourceIntoProcedureUseCase implements UseCase<ConvertSourceIntoProcedureUseCaseInputDto, ConvertSourceIntoProcedureUseCaseOutputDto> {

    source: Source
    converter: Converter

    constructor({source, converter} : {source: Source, converter: Converter}) {
        this.source = source
        this.converter = converter
    }

    async execute (input: ConvertSourceIntoProcedureUseCaseInputDto) {
        return new Promise<ConvertSourceIntoProcedureUseCaseOutputDto>((resolve) => {
            const result = new ConvertSourceIntoProcedureUseCaseOutputDto()
            this.source.getReadStream()
            .on('error', () => {
                result.success = false
                resolve(result)
            })
            .on('data', data => {
                result.procedures.push(this.converter.convert(data))
            })
            .on('end', ()=> {
                result.success = true
                resolve(result)
            })
        })
    }
}