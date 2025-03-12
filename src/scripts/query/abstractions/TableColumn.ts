interface ITableColumn {
    name: string,
    isSelected: boolean,
}

class TableColumn implements ITableColumn {

    constructor(name: string, isSelected: boolean = false) {
        this.name = name;
        this.isSelected = isSelected;
    }

    name: string;
    isSelected: boolean;

    toggleSelectColumn(): void {
        this.isSelected = !this.isSelected;
    }
}

export { TableColumn }