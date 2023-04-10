import {
  GET_PRODUCTOS,
  ALL_PRODUCTOS,
  SEARCHxNAME,
  SEARCHxCATEGORIA,
  SEARCHxSUBCATEGORIA,
  GET_DETAIL,
  CLEAN_DETAIL,
  ADD_PAGINATE,
  GET_USUARIOS,
  GET_CATEGORIAS,
  DELETE_PROD,
  DELETE_USER,
  DELETE_DEPO,
  GET_DEPOSITOS,
} from "../actions/actions";

const initialState = {
  productos: [],
  productosHome: [],
  categorias: [
    { id: 1, nombre: "Bien de uso" },
    { id: 2, nombre: "Bien de consumo" },
  ],
  subcategorias: [
    { id: 1, nombre: "Equipos" },
    { id: 2, nombre: "Maquinas" },
    { id: 3, nombre: "Materiales" },
    { id: 4, nombre: "Repuestos" },
  ],
  detail: [],
  detailUser: [],
  roles: [
    "Administrador",
    "Gerente",
    "Responsable de Compra",
    "Responsable de Logística",
    "Responsable de Depósito",
    "Responsable de Administración",
    "Jefe de Obra",
    "Responsable de Transporte",
    "Recursos Humanos",
  ],
  usuarios: [],
  depositos: [],
  paginate: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    /****************** GETS ******************/
    case GET_PRODUCTOS: {
      return {
        ...state,
        productos: [...action.payload],
        productosHome: [...action.payload],
      };
    }

    case ALL_PRODUCTOS: {
      return {
        ...state,
        productos: [...action.payload],
        productosHome: [...action.payload],
      };
    }

    case GET_USUARIOS: {
      return {
        ...state,
        usuarios: [...action.payload],
      };
    }

    case GET_CATEGORIAS: {
      return {
        ...state,
        categorias: [...action.payload],
      };
    }
    case GET_DEPOSITOS: {
      return {
        ...state,
        depositos: [...action.payload],
      };
    }

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        detail: [],
      };

    /****************** CREACIONES ******************/
    case "POST_PROD": {
      return {
        ...state,
        productos: action.payload,
      };
    }

    case "POST_USUARIOS": {
      return {
        ...state,
        usuarios: action.payload,
      };
    }

    /****************** DELETES ******************/
    case DELETE_PROD: {
      return {
        ...state,
        productosHome: state.productosHome.filter(
          (prod) => prod.id !== action.payload
        ),
        productos: state.productos.filter((prod) => prod.id !== action.payload),
      };
    }

    case DELETE_USER: {
      return {
        ...state,
        usuarios: state.usuarios.filter((user) => user.id !== action.payload),
      };
    }
    case DELETE_DEPO: {
      return {
        ...state,
        depositos: state.depositos.filter((depo) => depo.id !== action.payload),
      };
    }

    /****************** OTROS ******************/
    case SEARCHxNAME: {
      const productsFilter = state.productos.filter((e) =>
        e.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        productosHome: [...productsFilter],
      };
    }

    case SEARCHxCATEGORIA: {
      let prodFilter = state.productos.filter(
        (e) => e.categoria === action.payload
      );
      return {
        ...state,
        productosHome: prodFilter,
      };
    }

    case SEARCHxSUBCATEGORIA: {
      let prodFilter = state.productos.filter(
        (e) => e.subcategoria === action.payload
      );
      return {
        ...state,
        productosHome: prodFilter,
      };
    }

    case ADD_PAGINATE:
      return {
        ...state,
        paginate: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
