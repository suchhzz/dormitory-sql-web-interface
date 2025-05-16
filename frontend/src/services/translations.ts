type ColumnTranslations = {
  [tableName: string]: {
    [columnName: string]: string;
  };
};

export const columnTranslationsConfig: ColumnTranslations = {
  faculty: {
    id: "Ідентифікатор",
    name: "Назва факультету",
  },
  faculty_group: {
    id: "Ідентифікатор",
    faculty_id: "Факультет",
    name: "Назва групи",
  },
  resident: {
    id: "Ідентифікатор",
    group_id: "Група",
    firstname: "Ім'я",
    lastname: "Прізвище",
    phone: "Телефон",
    email: "Ел. пошта",
    date_of_birth: "Дата народження",
  },
  dormitory: {
    id: "Ідентифікатор",
    name: "Назва гуртожитку",
    address: "Адреса",
  },
  room_type: {
    id: "Ідентифікатор",
    type: "Тип кімнати",
    price_per_month: "Ціна за місяць",
  },
  room: {
    id: "Ідентифікатор",
    room_type_id: "Тип кімнати",
    dormitory_id: "Гуртожиток",
    room_number: "Номер кімнати",
    capacity: "Місткість",
  },
  accommodation: {
    id: "Ідентифікатор",
    resident_id: "Мешканець",
    room_id: "Кімната",
    check_in_date: "Дата заселення",
    check_out_date: "Дата виселення",
  },
  bill: {
    id: "Ідентифікатор",
    accommodation_id: "Поселення",
    check_number: "Номер чеку",
    amount: "Сума",
    start_date: "Дата початку",
    end_date: "Дата завершення",
  },
  payment: {
    id: "Ідентифікатор",
    accommodation_id: "Поселення",
    bill_id: "Рахунок",
    amount: "Сума оплати",
    payment_date: "Дата оплати",
  },
  audit_log: {
    id: "Ідентифікатор",
    table_name: "Назва таблиці",
    action: "Дія",
    new_data: "Нові дані",
    change_time: "Час зміни",
  },
};

export const tableNameTranslations: { [tableName: string]: string } = {
  faculty: "Факультет",
  faculty_group: "Група факультету",
  resident: "Мешканець",
  dormitory: "Гуртожиток",
  room_type: "Тип кімнати",
  room: "Кімната",
  accommodation: "Поселення",
  bill: "Рахунок",
  payment: "Оплата",
  audit_log: "Журнал аудиту",
};
