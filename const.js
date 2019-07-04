export const URL_CAR_CHECK = 'ride_on_car_parking';

export const URL_GET_PLACE = 'get_free_place';

export const URL_CREATE_RESERVE = '/reservation_create';

export const URL_CAR_CREATE = '/car_create';

export const URL_PAY_PARKING = '/calc_amount';

export const URL_PAY_RESERVED = '/payment';

export const OWNER = '/owner';

export const URL_PARKING_SHOW = '/parking_show';
export const URL_PARKING_CREATE = '/parking_create';
export const URL_PARKING_DELETE = '/parking_delete';
export const URL_PARKING_EDIT = '/parking_edit';

export const URL_RATE_CREATE = '/rate_create';
export const URL_RATE_EDIT = '/rate_edit';
export const URL_RATE_DELETE = '/rate_delete';

export const URL_OPERATOR_CREATE = '/operator_create';
export const URL_OPERATOR_DELETE = '/operator_delete';
export const URL_OPERATOR_EDIT = '/operator_edit';

export const ownerLinks = [
  { path: '/parkings', title: 'Парковки' },
  { path: '/operators', title: 'Операторы' },
  { path: '/rates', title: 'Тарифы' },
  { path: '/settings', title: 'Настройки' },
  { path: '/reports', title: 'Отчеты' },
];

export const operatorLinks = [
  { path: '/operatorpark', title: 'Въезд' },
  { path: '/operatorout', title: 'Выезд' },
  { path: '/operatorpay', title: 'Оплата' },
];
