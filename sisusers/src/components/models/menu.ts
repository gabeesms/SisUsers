export class Menu {
  usuario: string;
  itensMenu: MenuItem[];
  appBarStyle?: string;

  constructor(usuario: string, itens: MenuItem[], appBarStyle?: string) {
    this.usuario = usuario;
    this.itensMenu = itens;
    this.appBarStyle = appBarStyle;
  }
}

export class MenuItem {
  title: string;
  path: string;
  // icon: string;
  isFather: boolean;
  itens?: MenuItem[];

  constructor(
    title: string,
    path: string,
    icon: string,
    isFather: boolean,
    itens?: MenuItem[]
  ) {
    this.title = title;
    this.path = path;
    // this.icon = icon;
    this.isFather = isFather;
    this.itens = itens;
  }
}
