import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SINGUP_REQUEST,
    SINGUP_FAILURE,
    SINGUP_SUCCESS,
  } from "./actiontypes";

  export interface IAuth{
    token :string
}
/////// interface State of reducer //////////////
export interface AuthState{
    loading : string;
     token : string;
     error: string | null
}

///////// Interfaces  payloads  of Login and Signup /////////

export interface LoginSuccessPayload {
    token : string
}


export interface LoginFailurePaylod {
    error : string
}


export interface SingupSuccessPayload {
    token : string
}


export interface SingupFailurePayload {
    token : string
}


////////////////////////////////////   Interfaces actions of Login //////////////////////////////////////////////////////////////////////////////////////////////////////////


export interface LoginPayload {
    value : {emial:string , password : string};
    callback : any
}


export interface LoginRequest{
    type : typeof LOGIN_REQUEST;
    payload : LoginPayload;
}


export type LoginSuccess ={
    type : typeof LOGIN_SUCCESS
    payload : LoginSuccessPayload
}


export type LoginFailure= {
    type : typeof LOGIN_FAILURE
    payload : LoginFailurePaylod
}


//////////////////////////////////////////// interfaces action of Singup /////////////////////////////////////////////////////////////////////////////////////////////////////
export interface SingupPayload {
   value : {email:string , password : string}
   callback : any
}


export interface SingupRequest {
    type: typeof SINGUP_REQUEST ;
    payload : SingupPayload
}

export type SingupSuccess ={
    type : typeof SINGUP_SUCCESS , 
    payload : SingupSuccessPayload ;
}


export type SingupFailure ={
    type : typeof SINGUP_FAILURE ; 
    payload : SingupFailurePayload
}

///////////////////////////// Interface  action of reducer //////////////////////////////
export type AuthAction =  LoginRequest |  LoginFailure | LoginSuccess | SingupRequest | SingupFailure | SingupRequest 
