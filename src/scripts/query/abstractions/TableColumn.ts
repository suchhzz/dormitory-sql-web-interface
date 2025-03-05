interface ITableColumn {
    name: string,
    isSelected: boolean,
}

class TableColumn implements ITableColumn {

    constructor(name: string) {
        this.name = name;
        this.isSelected = false;
    }

    name: string;
    isSelected: boolean;

    toggleSelectColumn(): void {
        this.isSelected = !this.isSelected;
    }
}

export { TableColumn }