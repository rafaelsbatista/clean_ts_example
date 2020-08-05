import { Readable } from 'stream'
import { ConvertSourceIntoProcedureUseCaseInputDto } from './data/convertSourceIntoProcedureUseCaseInputDto'
import { ConvertSourceIntoProcedureUseCase } from './convertSourceIntoProcedureUseCase'
import { ConvertSourceIntoProcedureUseCaseOutputDto } from './data/convertSourceIntoProcedureUseCaseOutputDto'
import { Source } from './boundary/source'
import { JsonStructure } from 'entities/json/jsonStructure'
import { JsonObject } from '../../entities/json/jsonObject'
import { Converter } from './boundary/converter'
import { Procedure } from '../../entities/medicalProcedure/procedure'

describe('Test ConvertSourceIntoProcedureUseCase', () => {
    const params = {
        source: <Source> {
            getReadStream(): Readable {
                return Readable.from([new JsonObject()])
            }
        },
        converter: <Converter> {
            convert(json: JsonStructure) : Procedure {
                return new Procedure('anyName', 'anyDesc', 'anyPrice')
            }
        }
    }
    test('Should return output', async () => {
        const convertSourceIntoProcedureUseCaseSut = new ConvertSourceIntoProcedureUseCase({
            ...params
        })
        
        const result = await convertSourceIntoProcedureUseCaseSut.execute(new ConvertSourceIntoProcedureUseCaseInputDto())

        expect(result instanceof ConvertSourceIntoProcedureUseCaseOutputDto).toBeTruthy()
        expect(result.success).toBeTruthy()
        expect(result.procedures[0]).toEqual(new Procedure('anyName', 'anyDesc', 'anyPrice'))
    })

    test('should return output with success false if stream fails', async () => {
        const readable = Readable.from([new JsonObject()])
        const convertSourceIntoProcedureUseCaseSut = new ConvertSourceIntoProcedureUseCase({
            ...params,
            source: <Source> {
                getReadStream(): Readable {
                    return readable
                }
            },
        })
        
        const result = await convertSourceIntoProcedureUseCaseSut.execute(new ConvertSourceIntoProcedureUseCaseInputDto())

        readable.emit('error', Error('error_on_stream'))
        expect(result instanceof ConvertSourceIntoProcedureUseCaseOutputDto).toBeTruthy()
        expect(result.success).toBeFalsy()
    })

    test('should return output with success false if convert fails', async () => {
        const convertSourceIntoProcedureUseCaseSut = new ConvertSourceIntoProcedureUseCase({
            ...params,
            converter: <Converter> {
                convert(json: JsonStructure) : Procedure {
                    throw Error('convert_error')
                }
            }
        })
        
        const result = await convertSourceIntoProcedureUseCaseSut.execute(new ConvertSourceIntoProcedureUseCaseInputDto())

        expect(result instanceof ConvertSourceIntoProcedureUseCaseOutputDto).toBeTruthy()
        expect(result.success).toBeFalsy()
    })
})