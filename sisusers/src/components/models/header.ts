export class Header {
    text: string
    align: string
    sortable: boolean
    value: string
    isAction: boolean
    isIcon: boolean

    constructor(text: string, value: string = "", isAction: boolean, isIcon: boolean, align: string = 'center', sortable: boolean = false) {
        this.text = text
        this.value = value
        this.align = align
        this.sortable = sortable
        this.isAction = isAction
        this.isIcon = isIcon
    }

}

export class HeaderIcon {
    icon: string
    color: string
    title: string
    constructor(icon: string, color: string, title: string) {
        this.icon = icon
        this.color = color
        this.title = title
    }
}

export class HeaderAction {
    icon: string
    color: string
    text: string
    action: string
    width: string
    constructor(icon: string, color: string, text: string, action: string, width: string) {
        this.icon = icon
        this.color = color
        this.text = text
        this.action = action
        this.width = width
    }
}