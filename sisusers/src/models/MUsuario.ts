import { IModel } from "@utils/IModel"
import { ValidationSchema } from '@/validation/validation'

export class MUsuario extends IModel {

    id: number | null = 0
    nome: string = ""
    telefone: string = ""
    cpf: string = ""
    email: string = ""
    cep: string = ""
    logradouro: string = ""
    numero: string = ""
    complemento: string = ""
    bairro: string = ""
    localidade: string = ""
    uf: string = ""
    registroDate: Date = new Date()

    constructor() {
        super();
    }

    //Interface IModel
    static url = "User"
    static getSchema(): import("../validation/validation").ValidationSchema[] {
        return []
    }
}