import { UsuarioBaseClient } from '@/api/UsuarioBaseClient';

export class IFactory {

    //Usuario Instance
    private static usuarioBaseClient: UsuarioBaseClient;

    //Centro Custo Singleton
    static getUsuarioBaseClient(): UsuarioBaseClient {
        if (!this.usuarioBaseClient) {
            this.usuarioBaseClient = new UsuarioBaseClient();
        }
        return this.usuarioBaseClient;
    }
}