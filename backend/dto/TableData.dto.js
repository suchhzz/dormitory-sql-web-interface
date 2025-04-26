export function tableDataResponseDTO(data, tableName) {
    const columns = data.columnsInfo.map(column => column.name);

    const values = data.data.map(dataItem =>
        columns.map(col => String(dataItem[col] ?? ""))
    );

    return {
        tableName: tableName,
        columns: columns,
        values: values
    };
}

// const database = {
//     tables: [
//         {
//             tableName: "persons",
//             columns: ["id", "firstname", "lastname", "age"],
//             values: [
//                 ["1", "petr", "petrenko", "26"],
//                 ["2", "john", "allen", "32"],
//                 ["3", "maria", "buya", "54"],
//                 ["4", "joseph", "miller", "21"],
//                 ["5", "mac", "tavish", "17"]
//             ]
//         }
//     ]
// }

// {
//     "columnsInfo": [
//         {
//             "cid": 0,
//             "name": "id",
//             "type": "INTEGER",
//             "notnull": 1,
//             "dflt_value": null,
//             "pk": 1
//         },
//         {
//             "cid": 1,
//             "name": "name",
//             "type": "TEXT",
//             "notnull": 1,
//             "dflt_value": null,
//             "pk": 0
//         }
//     ],
//     "foreignKeys": [],
//     "data": [
//         {
//             "id": 1,
//             "name": "ВІДСУТНІЙ"
//         },
//         {
//             "id": 2,
//             "name": "ФАІТ"
//         },
//         {
//             "id": 3,
//             "name": "АХ"
//         },
//         {
//             "id": 4,
//             "name": "БФ"
//         },
//         {
//             "id": 5,
//             "name": "ФІСЕ"
//         }
//     ]
// }