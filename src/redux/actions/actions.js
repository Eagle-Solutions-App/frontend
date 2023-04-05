import axios from "axios";
export const GET_PRODUCTOS = "GET_PRODUCTOS";
export const ALL_PRODUCTOS = "ALL_PRODUCTOS";
export const SEARCHxNAME = "SEARCHxNAME";
export const SEARCHxCATEGORIA = "SEARCHxCATEGORIA";
export const SEARCHxSUBCATEGORIA = "SEARCHxSUBCATEGORIA";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const ADD_PAGINATE = "ADD_PAGINATE";
export const GET_USUARIOS = "GET_USUARIOS";
export const GET_CATEGORIAS = "GET_CATEGORIAS";
export const GET_DETAILUSER = "GET_DETAILUSER";
export const CLEAN_DETAILUSER = "CLEAN_DETAILUSER";

export const getProductos = () => {
  return async function (dispatch) {
    const response = await axios.get("/productos");
    return dispatch({
      type: GET_PRODUCTOS,
      payload: response.data,
    });
  };
};

export const allProductos = () => {
  return async function (dispatch) {
    const response = await axios.get("/productos");
    return dispatch({
      type: ALL_PRODUCTOS,
      payload: response.data,
    });
  };
};

export const getUsuarios = () => {
  return async function (dispatch) {
    const response = await axios.get("/usuarios");
    return dispatch({
      type: GET_USUARIOS,
      payload: response.data,
    });
  };
};

export const getCategorias = () => {
  return async function (dispatch) {
    const response = await axios.get("/categorias");
    return dispatch({
      type: GET_CATEGORIAS,
      payload: response.data,
    });
  };
};

export const postProd = (payload) => {
  return async function () {
    const response = await axios.post("/productos", payload);
    return response;
  };
};

export const postDeposito = (payload) => {
  return async function () {
    const response = await axios.post("/productos", payload);
    return response;
  };
};

export const updateProd = (data, id) => {
  return async function () {
    await axios.put(`/productos/${id}`, data);
  };
};

export const updateUser = (data, id) => {
  return async function () {
    await axios.put(`/usuarios/${id}`, data);
  };
};

export const searchXname = (nombre) => {
  return {
    type: SEARCHxNAME,
    payload: nombre,
  };
};

export const searchXcategoria = (categoria) => {
  return {
    type: SEARCHxCATEGORIA,
    payload: categoria,
  };
};

export const searchXsubcategoria = (subcategoria) => {
  return {
    type: SEARCHxSUBCATEGORIA,
    payload: subcategoria,
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/productos/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: response.data,
    });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const getDetailUser = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/usuarios/${id}`);
    return dispatch({
      type: GET_DETAILUSER,
      payload: response.data,
    });
  };
};

export const cleanDetailUser = () => {
  return { type: CLEAN_DETAILUSER };
};

export const addPaginate = (num) => {
  return {
    type: ADD_PAGINATE,
    payload: num,
  };
};
