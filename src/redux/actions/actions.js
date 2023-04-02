export const GET_PRODUCTOS = "GET_PRODUCTOS";
export const SEARCHxNAME = "SEARCHxNAME";
export const SEARCHxCATEGORIA = "SEARCHxCATEGORIA";
export const SEARCHxSUBCATEGORIA = "SEARCHxSUBCATEGORIA";
/* import productos from "../../../productos.json"; */

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
