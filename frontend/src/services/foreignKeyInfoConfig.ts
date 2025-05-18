type ForeignTableInfo = {
    [tableName: string]: {
        [columnsName: string]: string[];
    }
}

export const foreignTableInfoConfig: ForeignTableInfo = {
    faculty: {
        columns: ['name'],
    },
    faculty_group: {
        columns: ['name']
    },
    resident: {
        columns: ['firstname', 'lastname'],
    },
    dormitory: {
        columns: ['name'],
    },
    room_type: {
        columns: ['type'],
    },
    room: {
        columns: ['room_number']
    },
    accommodation: {
        columns: ['resident_id', 'room_id']
    },
    bill: {
        columns: ['check_number', 'amount']
    },
    payment: {
        columns: ['check_number'],
    },
}