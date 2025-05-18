type TableNameByForeignKey = {
    [foreignKeyColumn: string]: {
        [tableName: string]: string;
    }
}

export const tableNamesByForeignKey: TableNameByForeignKey = {
    faculty_id: {
        tableName: "faculty",
    },
    group_id: {
        tableName: "faculty_group",
    },
    resident_id: {
        tableName: "resident",
    },
    dormitory_id: {
        tableName: "dormitory",
    },
    room_type_id: {
        tableName: "room_type",
    },
    room_id: {
        tableName: "room",
    },
    accommodation_id: {
        tableName: "accommodation",
    },
    bill_id: {
        tableName: "bill",
    },
    payment_id: {
        tableName: "payment",
    },
}