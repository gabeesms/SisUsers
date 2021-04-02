import { IModel } from "@utils/IModel"
import axios from "@plugins/axios"
import { Validation } from "../validation/validation"
import { Resposta } from './Resposta';

export abstract class BaseClient {

    instanceClass: typeof IModel;

    constructor(InstanceClass: typeof IModel) {
        this.instanceClass = InstanceClass;
    }

    get(process: (result: Resposta) => void) {
        axios.get(this.instanceClass.url).then((response: any) => {
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

    getPath(path: string, process: (result: Resposta) => void) {
        axios.get(this.instanceClass.url + path).then((response: any) => {
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

    post(entity: IModel, process: (result: Resposta) => void) {
        let resultValid = new Validation().ValidSchema(this.instanceClass.getSchema(), entity);
        if (resultValid.resposta) {
            axios.post(this.instanceClass.url, entity).then((response: any) => {
                process(response.data)
            }).catch((e: any) => {
                let result = new Resposta();
                result.resposta = false;
                result.informacao = e.toString();
                process(result)
            })
        } else {
            process(resultValid)
        }
    }
    postPath(path: string, entity: IModel, process: (result: Resposta) => void) {
        let resultValid = new Validation().ValidSchema(this.instanceClass.getSchema(), entity);
        if (resultValid.resposta) {
            axios.post(this.instanceClass.url + path, entity).then((response: any) => {
                process(response.data)
            }).catch((e: any) => {
                let result = new Resposta();
                result.resposta = false;
                result.informacao = e.toString();
                process(result)
            })
        } else {
            process(resultValid)
        }
    }
    putPath(path: string, entity: IModel, process: (result: Resposta) => void) {
        let resultValid = new Validation().ValidSchema(this.instanceClass.getSchema(), entity);
        if (resultValid.resposta) {
            axios.put(this.instanceClass.url + path, entity).then((response: any) => {
                process(response.data)
            }).catch((e: any) => {
                let result = new Resposta();
                result.resposta = false;
                result.informacao = e.toString();
                process(result)
            })
        } else {
            process(resultValid)
        }
    }

    deletePath(path: string, process: (result: Resposta) => void) {
        axios.delete(this.instanceClass.url + path).then((response: any) => {
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



    postByView(entity: IModel, process: (result: Resposta) => void) {
        let resultValid = new Validation().ValidSchema(this.instanceClass.getSchema(), entity);
        if (resultValid.resposta) {
            axios.post(this.instanceClass.url + "/ByView", entity).then((response: any) => {
                process(response.data)
            }).catch((e: any) => {
                let result = new Resposta();
                result.resposta = false;
                result.informacao = e.toString();
                process(result)
            })
        } else {
            process(resultValid)
        }
    }
}