import { MUsuario } from '@/models/MUsuario';
import { BaseClient } from '@/utils/BaseClient';
import { Resposta } from '@/utils/Resposta';
import axios from "@plugins/axios"


export class UsuarioBaseClient extends BaseClient {

    constructor() {
        super(MUsuario)
    }

    getBuscaCep(cep: string, process: (result: Resposta) => void) {
        axios.get(this.instanceClass.url + "/buscaCep/" + cep).then((response: any) => {
            let result = new Resposta();
            result.resposta = true;
            result.entity = response.data;
            process(result)
        }).catch((e: any) => {
            let result = new Resposta();
            result.resposta = false;
            result.informacao = e.toString();
            process(result)
        })
    }

}