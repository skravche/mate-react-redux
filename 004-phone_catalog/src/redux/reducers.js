import {
  GET_PHONE_LIST_REQUEST,
  GET_PHONE_LIST_SUCCESS,
  GET_PHONE_LIST_FAILURE,
} from './actions';

const initialState = {
  listLoading: false,
  phones: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PHONE_LIST_REQUEST:
      return {
        ...state,
        listLoading: true,
      };
    case GET_PHONE_LIST_SUCCESS:
      return {
        ...state,
        listLoading: false,
        phones: action.phones,
      };
    case GET_PHONE_LIST_FAILURE:
      return {
        ...state,
        listLoading: false,
      };
    default:
      return state;
  }
}
