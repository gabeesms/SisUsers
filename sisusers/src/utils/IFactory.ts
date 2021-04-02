import { UsuarioBaseClient } from '@/api/UsuarioBaseClient';

export class IFactory {

    //Usuario Instance
    private static usuarioBaseClient: UsuarioBaseClient;

    static getUsuarioBaseClient(): UsuarioBaseClient {
        if (!this.usuarioBaseClient) {
            this.usuarioBaseClient = new UsuarioBaseClient();
        }
        return this.usuarioBaseClient;
    }
}