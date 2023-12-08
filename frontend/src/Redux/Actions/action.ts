// import {
//   LOGIN_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   SINGUP_FAILURE,
//   SINGUP_REQUEST,
//   SINGUP_SUCCESS,
// } from "../types/actiontypes";

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/actiontypes";

// import {
//   LoginFailurePaylod,
//   LoginFailure,
//   AuthAction,
//   AuthState,
//   IAuth,
//   LoginPayload,
//   LoginRequest,
//   LoginSuccess,
//   LoginSuccessPayload,
//   SingupFailure,
//   SingupFailurePayload,
//   SingupPayload,
//   SingupRequest,
//   SingupSuccess,
//   SingupSuccessPayload,
// } from "../types/types";

// export const loginRequest = (payload: LoginPayload): LoginRequest => ({
//   type: LOGIN_REQUEST,
//   payload,
// });
// export const loginSuccess = (payload: LoginSuccessPayload): LoginSuccess => ({
//   type: LOGIN_SUCCESS,
//   payload,
// });
// export const loginFailure = (payload: LoginFailurePaylod): LoginFailure => ({
//   type: LOGIN_FAILURE,
//   payload,
// });
// export const singupRequest = (payload: SingupPayload): SingupRequest => ({
//     type: SINGUP_REQUEST,
//     payload,
//   });
// export const singupSuccess = (payload: SingupSuccessPayload): SingupSuccess => ({
//     type: SINGUP_SUCCESS,
//     payload,
//   });
// export const singupFailure = (payload: SingupFailurePayload): SingupFailure => ({
//     type: SINGUP_FAILURE,
//     payload,
//   });

export const loginRequest = (payload: { email: string; password: string }) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
