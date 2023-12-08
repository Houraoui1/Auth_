// import {
//   LOGIN_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   SINGUP_REQUEST,
//   SINGUP_FAILURE,
//   SINGUP_SUCCESS,
// } from "../types/actiontypes";

import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../types/actiontypes";

// const INIT_STATE = {
//   loading: false,
//   token: "",
//   error: null,
// };
// const reducers = (state = INIT_STATE, action: any) => {
//   const { type, payload } = action;
//   switch (type) {
//     case SINGUP_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case SINGUP_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         token: "",
//         error: payload,
//       };
//     case SINGUP_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         token: payload,
//         error: null,
//       };
//     case LOGIN_REQUEST:
//       return {
//         ...state,
//         loading: true,
//       };
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         token: "",
//         error: payload,
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         token: payload,
//         error: null,
//       };
//     default:
//       return { ...state };
//   }
// };
// export default reducers;


interface AuthState {
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
};

const authReducer = (state = initialState, action: { type: string; payload?: any }): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;