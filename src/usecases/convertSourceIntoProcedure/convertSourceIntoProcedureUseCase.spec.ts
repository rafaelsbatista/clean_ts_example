import { ConvertSourceIntoProcedureUseCaseInputDto } from './data/convertSourceIntoProcedureUseCaseInputDto'
import { ConvertSourceIntoProcedureUseCase } from './convertSourceIntoProcedureUseCase'
import { ConvertSourceIntoProcedureUseCaseOutputDto } from './data/convertSourceIntoProcedureUseCaseOutputDto'

describe('Test ConvertSourceIntoProcedureUseCase', () => {
    test('Should return output', async () => {
        const convertSourceIntoProcedureUseCaseSut = new ConvertSourceIntoProcedureUseCase()
        
        const result = await convertSourceIntoProcedureUseCaseSut.execute(new ConvertSourceIntoProcedureUseCaseInputDto())

        expect(result instanceof ConvertSourceIntoProcedureUseCaseOutputDto).toBeTruthy()
    })
})