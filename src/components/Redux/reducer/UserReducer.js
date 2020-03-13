import {
  UPDATE_INFO,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_SUBMIT,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  SIGN_OUT
} from "../actions";

const initialState = {
  userID: "",
  username: "",
  firstname: "",
  lastname: "",
  loggedIn: false
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INFO:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        password: action.payload.password
      };
    case LOGIN_SUBMIT:
      return state;
    case LOGIN_SUCCESS:
      return {
        ...state,
        userID: action.payload.id,
        username: action.payload.username,
        firstname: action.payload.firstName,
        lastname: action.payload.lastName,
        loggedIn: true
      };
    case LOGIN_FAIL:
      return state;
    case REGISTER_SUBMIT:
      return state;
    case REGISTER_SUCCESS:
      return {
        ...state,
        userID: action.payload.id,
        username: action.payload.username,
        firstname: action.payload.firstName,
        lastname: action.payload.lastName,
        loggedIn: true
      };
    case REGISTER_FAIL:
      return state;
    case SIGN_OUT:
      return {
        ...state,
        userID: "",
        username: "",
        firstname: "",
        lastname: "",
        loggedIn: false
      };
    default:
      return state;
  }
};

export default userReducer;
