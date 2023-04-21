import axios from "axios";
export const GET_PRODUCTOS = "GET_PRODUCTOS";
export const GET_DEPOSITOS = "GET_DEPOSITOS";
export const GET_TIPOS = "GET_TIPOS";
export const GET_EMPRESAS = "GET_EMPRESAS";
export const GET_USUARIOS = "GET_USUARIOS";
export const GET_ROLES = "GET_ROLES";
export const GET_CATEG = "GET_CATEG";
export const GET_SUBCATEG = "GET_SUBCATEG";
export const ALL_PRODUCTOS = "ALL_PRODUCTOS";

export const DELETE_PROD = "DELETE_PROD";
export const DELETE_USER = "DELETE_USER";
export const DELETE_DEPO = "DELETE_DEPO";
export const DELETE_EMPRESA = "DELETE_EMPRESA";

export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_DETAIL_DEPO = "GET_DETAIL_DEPO";
export const CLEAN_DETAIL_DEPO = "CLEAN_DETAIL_DEPO";

export const SEARCHxNAME = "SEARCHxNAME";
export const SEARCHxCATEGORIA = "SEARCHxCATEGORIA";
export const SEARCHxSUBCATEGORIA = "SEARCHxSUBCATEGORIA";
export const ADD_PAGINATE = "ADD_PAGINATE";

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

export const getTipos = () => {
  return async function (dispatch) {
    const response = await axios.get("/tipoDepositos");
    return dispatch({
      type: GET_TIPOS,
      payload: response.data,
    });
  };
};

export const getEmpresas = () => {
  return async function (dispatch) {
    const response = await axios.get("/empresas");
    return dispatch({
      type: GET_EMPRESAS,
      payload: response.data,
    });
  };
};

export const getRoles = () => {
  return async function (dispatch) {
    const response = await axios.get("/roles");
    return dispatch({
      type: GET_ROLES,
      payload: response.data,
    });
  };
};

export const getCateg = () => {
  return async function (dispatch) {
    const response = await axios.get("/categorias");
    return dispatch({
      type: GET_CATEG,
      payload: response.data,
    });
  };
};

export const getSubcategs = () => {
  return async function (dispatch) {
    const response = await axios.get("/subcategorias");
    return dispatch({
      type: GET_SUBCATEG,
      payload: response.data.resultado,
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

export const blockEmpresa = (data, id) => {
  return async function (dispatch) {
    await axios.put(`/empresas/${id}`, data);
    dispatch(getEmpresas());
  };
};

export const unblockEmpresa = (data, id) => {
  return async function (dispatch) {
    await axios.put(`/empresas/${id}`, data);
    dispatch(getEmpresas());
  };
};

export const blockUsuario = (data, id) => {
  return async function (dispatch) {
    await axios.put(`/usuarios/${id}`, data);
    dispatch(getUsuarios());
  };
};

export const unblockUsuario = (data, id) => {
  return async function (dispatch) {
    await axios.put(`/usuarios/${id}`, data);
    dispatch(getUsuarios());
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

export const updateDepo = (data, id) => {
  return async function () {
    await axios.put(`/depositos/${id}`, data);
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

export const deleteDepo = (id) => {
  return async function (dispatch) {
    await axios.delete(`/depositos/${id}`);
    dispatch({ type: DELETE_DEPO, payload: id });
  };
};

export const deleteEmpresa = (id) => {
  return async function (dispatch) {
    await axios.delete(`/empresas/${id}`);
    dispatch({ type: DELETE_EMPRESA, payload: id });
  };
};

/****************** DETAILS ******************/
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

export const getDetailDepo = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/depositos/${id}`);
    console.log(response.data);
    return dispatch({
      type: GET_DETAIL_DEPO,
      payload: response.data,
    });
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

export const addPaginate = (num) => {
  return {
    type: ADD_PAGINATE,
    payload: num,
  };
};

// export const blockUser = (id) => {
//   return {
//     type: BLOCK_USER,
//     payload: id,
//   };
// };

// export const unblockUser = (id) => {
//   return {
//     type: UNBLOCK_USER,
//     payload: id,
//   };
// };

// export const blockEmpresa = (id) => {
//   return {
//     type: BLOCK_EMPRESA,
//     payload: id,
//   };
// };

// export const unblockEmpresa = (id) => {
//   return {
//     type: UNBLOCK_EMPRESA,
//     payload: id,
//   };
// };
