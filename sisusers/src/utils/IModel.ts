import { ValidationSchema } from "../validation/validation"
export abstract class IModel {

    static url: string = "";

    static getSchema(): ValidationSchema[] {
        return []
    }

    constructor() {

    }

}