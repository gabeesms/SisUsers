export enum StorageEnum {
    Logado = "Logado",
    Login = "Login"
}

export class Storage {
    static valKey = "sis_users_";

    static salvar(key: string, data: string) {
        sessionStorage.setItem(this.valKey + key, data);
    }

    static get(key: string): string | null {
        return sessionStorage.getItem(this.valKey + key);
    }
}
