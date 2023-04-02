/* import axios from "axios"; */
export const GET_PRODUCTOS = "GET_PRODUCTOS";
export const SEARCHxNAME = "SEARCHxNAME";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getProductos = () => {
  return async function (dispatch) {
    /* const response = await axios.get("../../../productos.json");
    console.log(response);
    return dispatch({
      type: GET_PRODUCTOS,
      payload: [response.data],
    }); */
  };
};

export const searchXname = (nombre) => {
  return {
    type: SEARCHxNAME,
    payload: nombre,
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    /* const response = await axios.get(`//${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: response.data,
    }); */
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};
