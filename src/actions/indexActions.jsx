// Template para acciones. Se recomienda importar las constantes de las acciones desde un archivo independiente.

import { SESION_USUARIO, CERRAR_SESION_USUARIO } from "../constants/globalConstants.jsx";

export function validarUsuario(usuario) {
  return async function (dispatch) {
    dispatch({ type: SESION_USUARIO, payload: usuario });
  }
}

export function cerrarSesionUsuario() {
  return async function (dispatch) {
    dispatch({ type: CERRAR_SESION_USUARIO, payload: null });
  }
} 