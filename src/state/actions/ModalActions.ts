import { Action } from "redux";

export enum ModalActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  HIDE_MODAL = "HIDE_MODAL",
}

export interface ShowModalAction extends Action {
  type: ModalActionTypes.SHOW_MODAL;
}

export interface HideModalAction extends Action {
  type: ModalActionTypes.HIDE_MODAL;
}

export function showModal(): ShowModalAction {
  return {
    type: ModalActionTypes.SHOW_MODAL,
  };
}

export function hideModal(): HideModalAction {
  return {
    type: ModalActionTypes.HIDE_MODAL,
  };
}