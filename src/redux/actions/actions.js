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
export const DELETE_PROD = "DELETE_PROD";
export const DELETE_USER = "DELETE_USER";
export const GET_DEPOSITOS = "GET_DEPOSITOS";

/****************** GETS ******************/
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
      payload: response.data.resultado,
    });
  };
};

export const getDepositos = () => {
  return async function (dispatch) {
    const response = await axios.get("/depositos");
    return dispatch({
      type: GET_DEPOSITOS,
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

/****************** CREACIONES ******************/
export const postProd = (payload) => {
  return async function () {
    const response = await axios.post("/productos", payload);
    return response;
  };
};

export const postDeposito = (payload) => {
  return async function () {
    const response = await axios.post("/depositos", payload);
    return response;
  };
};

export const postUser = (payload) => {
  console.log(payload);
  return async function () {
    const response = await axios.post("/usuarios", payload);
    return response;
  };
};

/****************** EDICIONES ******************/

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

/****************** DELETES ******************/
export const deleteProd = (id) => {
  return async function (dispatch) {
    const body = { id: id };
    await axios.delete("/productos", { data: body });
    dispatch({ type: DELETE_PROD, payload: id });
  };
};

export const deleteUser = (id) => {
  return async function (dispatch) {
    await axios.delete(`/usuarios/${id}`);
    dispatch({ type: DELETE_USER, payload: id });
  };
};

/****************** EXTRAS ******************/
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
    console.log(response.data);
    return dispatch({
      type: GET_DETAIL,
      payload: response.data,
    });
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const addPaginate = (num) => {
  return {
    type: ADD_PAGINATE,
    payload: num,
  };
};
