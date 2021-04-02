import { Resposta } from "@utils/Resposta"

export class Validation {

    /**
     * Valid Schema
     */
    public ValidSchema(schema: ValidationSchema[], json: any): Resposta {
        let retorno = new Resposta();

        retorno.resposta = true;
        retorno.informacao = "";

        for (let i = 0; i < schema.length; i++) {
            let validador = schema[i]
            let value = json[validador.name];
            if (value) {
                if (typeof value !== validador.type) {
                    retorno.resposta = false;
                    retorno.informacao = "Tipo do campo " + validador.name + " inváilido!";
                    break;
                }

                if (validador.required && !value) {
                    retorno.resposta = false;
                    retorno.informacao = "Campo " + validador.name + " é obrigatório!";
                    break;
                }

                if (validador.type == "string" && validador.maxLength > 0 && (value + '').length > validador.maxLength) {
                    retorno.resposta = false;
                    retorno.informacao = "Campo " + validador.name + " ultrapassou o tamanho máximo!";
                    break;
                }
                if (validador.valid) {
                    let result = validador.valid(value);
                    if (!result.resposta) {
                        retorno.resposta = false;
                        retorno.informacao = result.informacao;
                        break;
                    }
                }
            } else {

                if (validador.required) {
                    retorno.resposta = false;
                    retorno.informacao = "Campo " + validador.name + " é obrigatório!";
                    break;
                }
            }
        }

        return retorno;
    }
}

export class ValidationSchema {
    name: string
    type: string
    required: boolean
    maxLength: number
    valid?: (item: any) => (Resposta)

    constructor(name: string, type: string = "string", required: boolean = false, maxLength: number = 0, valid?: (item: any) => Resposta) {
        this.name = name
        this.type = type
        this.required = required
        this.maxLength = maxLength
        this.valid = valid
    }
}