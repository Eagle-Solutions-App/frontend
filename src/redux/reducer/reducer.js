import {
  GET_PRODUCTOS,
  ALL_PRODUCTOS,
  SEARCHxNAME_PROD,
  SEARCHxNAME_EMPR,
  SEARCHxCATEGORIA,
  SEARCHxSUBCATEGORIA,
  GET_DETAIL,
  ADD_PAGINATE,
  GET_USUARIOS,
  DELETE_PROD,
  DELETE_USER,
  DELETE_DEPO,
  DELETE_EMPRESA,
  GET_DEPOSITOS,
  GET_DETAIL_DEPO,
  GET_EMPRESAS,
  GET_ROLES,
  GET_TIPOS,
  GET_CATEG,
  GET_SUBCATEG,
  SEARCHxNAME_DEPO,
  SEARCHxNAME_USERS,
  SEARCHxROL,
  SEARCHxTIPO,
  GET_USER_ACTUAL,
} from "../actions/actions";

const initialState = {
  productos: [],
  productosHome: [],
  categorias: [],
  subcategorias: [],
  detail: [],
  detailDepo: [],
  detailUser: [],
  userActual: [],
  roles: [],
  usuarios: [],
  usuariosHome: [],
  empresas: [],
  depositos: [],
  depositosHome: [],
  tipos: [],
  paginate: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    /****************** GETS ******************/
    case GET_PRODUCTOS:
      return {
        ...state,
        productos: [...action.payload],
        productosHome: [...action.payload],
      };

    case ALL_PRODUCTOS:
      return {
        ...state,
        productos: [...action.payload],
        productosHome: [...action.payload],
      };

    case GET_USUARIOS:
      return {
        ...state,
        usuarios: [...action.payload],
        usuariosHome: [...action.payload],
      };

    case GET_USER_ACTUAL:
      return {
        ...state,
        userActual: action.payload,
      };

    case GET_DEPOSITOS:
      return {
        ...state,
        depositos: [...action.payload],
        depositosHome: [...action.payload],
      };

    case GET_TIPOS:
      return {
        ...state,
        tipos: [...action.payload],
      };

    case GET_EMPRESAS:
      return {
        ...state,
        empresas: [...action.payload],
      };

    case GET_ROLES:
      return {
        ...state,
        roles: [...action.payload],
      };

    case GET_CATEG:
      return {
        ...state,
        categorias: [...action.payload],
      };

    case GET_SUBCATEG:
      return {
        ...state,
        subcategorias: [...action.payload],
      };

    /****************** DETAILS ******************/
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_DETAIL_DEPO:
      return {
        ...state,
        detailDepo: action.payload,
      };

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

    case DELETE_EMPRESA: {
      return {
        ...state,
        empresas: state.empresas.filter((emp) => emp.id !== action.payload),
      };
    }

    /****************** OTROS ******************/
    case SEARCHxNAME_PROD: {
      const productsFilter = state.productos.filter((e) =>
        e.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        productosHome: [...productsFilter],
      };
    }
    case SEARCHxNAME_EMPR: {
      const empresasFilter = state.empresas.filter((e) =>
        e.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        empresas: [...empresasFilter],
      };
    }
    case SEARCHxNAME_DEPO: {
      const deposFilter = state.depositos.filter((e) =>
        e.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        depositos: [...deposFilter],
      };
    }
    case SEARCHxNAME_USERS: {
      const ususariosFilter = state.usuarios.filter((e) =>
        e.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        usuarios: [...ususariosFilter],
      };
    }

    case SEARCHxCATEGORIA: {
      let prodFilter =
        action.payload === "todas"
          ? state.productos
          : state.productos.filter((e) => e.categoria === action.payload);
      return {
        ...state,
        productosHome: prodFilter,
      };
    }

    case SEARCHxSUBCATEGORIA: {
      let prodFilter =
        action.payload === "todas"
          ? state.productos
          : state.productos.filter(
              (e) => e.Subcategorium.nombre === action.payload
            );
      return {
        ...state,
        productosHome: prodFilter,
      };
    }

    case SEARCHxROL: {
      let userFilter =
        action.payload === "todos"
          ? state.usuarios
          : state.usuarios.filter((e) => e.Rol.rol === action.payload);
      return {
        ...state,
        usuariosHome: userFilter,
      };
    }

    case SEARCHxTIPO: {
      let depoFilter =
        action.payload === "todos"
          ? state.depositos
          : state.depositos.filter(
              (e) => e.TipoDeposito.tipo === action.payload
            );
      return {
        ...state,
        depositosHome: depoFilter,
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
