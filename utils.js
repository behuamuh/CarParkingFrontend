import {
  URL_PARKING_DELETE,
  URL_OPERATOR_DELETE,
  URL_RATE_DELETE,
  URL_PARKING_EDIT,
  URL_OPERATOR_EDIT,
  URL_RATE_EDIT,
} from './const';

export const fetchJsonURL = (url, method, data) => {
  const token = getToken();

  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    method: method,
    body: JSON.stringify(data),
  });
};

export const getToken = () => {
  let token;
  try {
    token = document.getElementsByName('csrf-token')[0].content;
  } catch (e) {
    token = '';
  }
  return token;
};

export const handleDelete = (type, id) => {
  let url, data, message;
  if (!type || !id) return;
  switch (type) {
    case 'parking':
      url = URL_PARKING_DELETE;
      data = { parking: { id } };
      message = 'парковку';
      break;
    case 'operator':
      url = URL_OPERATOR_DELETE;
      data = { operator: { id } };
      message = 'оператора';
      break;
    case 'rate':
      url = URL_RATE_DELETE;
      data = { rate: { id } };
      message = 'тариф';
  }
  if (window.confirm(`Вы точно хотите удалить ${message}?`)) {
    fetchJsonURL(url, 'DELETE', data).then(() => {
      window.alert('Удаление успешно!');
      window.location.reload(); 
    }
    );
    // .catch(err => window.alert('Операция неудачна!'));
  }
};

export const handleChange = (type, data) => {
  let url, message;
  if (!type || !data) return;
  switch (type) {
    case 'parking':
      url = URL_PARKING_EDIT;
      message = 'парковку';
      break;
    case 'operator':
      url = URL_OPERATOR_EDIT;
      message = 'оператора';
      break;
    case 'rate':
      url = URL_RATE_EDIT;
      message = 'тариф';
  }
  if (window.confirm(`Вы точно хотите изменить ${message}?`)) {
    fetchJsonURL(url, 'PATCH', data)
      .then(() => {
          window.alert('Изменение успешно!');
          window.location.reload();   
      }
          )
      .catch(err => window.alert('Операция неудачна!'));
  }
};
