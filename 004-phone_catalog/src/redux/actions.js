import axios from 'axios';

export const GET_PHONE_LIST_REQUEST = 'GET_PHONE_LIST_REQUEST ';
export const GET_PHONE_LIST_SUCCESS = 'GET_PHONE_LIST_SUCCESS';
export const GET_PHONE_LIST_FAILURE = 'GET_PHONE_LIST_FAILURE';

export function getPhoneList() {
  return dispatch => {
    dispatch({ type: GET_PHONE_LIST_REQUEST });
    axios
      .get(
        `https://raw.githubusercontent.com/mate-academy/phone-catalogue-static/master/api/phones.json`
      )
      .then(response => {
        dispatch({ type: GET_PHONE_LIST_SUCCESS, phones: response.data });
      })
      .catch(() => {
        dispatch({ type: GET_PHONE_LIST_FAILURE });
      });
  };
}
