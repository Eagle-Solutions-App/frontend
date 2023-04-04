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
} from "../actions/actions";

const initialState = {
  productos: [],
  productosHome: [],
  categorias: [],
  subcategorias: [
    { id: 1, nombre: "Equipos" },
    { id: 2, nombre: "Maquinas" },
    { id: 3, nombre: "Materiales" },
    { id: 4, nombre: "Repuestos" },
  ],
  detail: [],
  permisos: [
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
  depositos: [
    {
      nombre: "Deposito1",
      direccion: "holaa 123",
      ciudad: "cordoba",
      provincia: "cordoba",
      pais: "Argentina",
    },
    {
      nombre: "cargamento 2",
      direccion: "chau 123",
      ciudad: "La plata",
      provincia: "Buenos Aires",
      pais: "Argentina",
    },
    {
      nombre: "cargamento depósito",
      direccion: "buena vida 123",
      ciudad: "Lima",
      provincia: "Lima",
      pais: "perú",
    },
  ],
  paginate: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS: {
      console.log(action.payload);
      return {
        ...state,
        productos: [...action.payload],
        productosHome: [...action.payload],
      };
    }

    case ALL_PRODUCTOS: {
      console.log(action.payload);
      return {
        ...state,
        productos: [...action.payload],
        productosHome: [...action.payload],
      };
    }

    case GET_USUARIOS: {
      console.log(action.payload);
      return {
        ...state,
        usuarios: [...action.payload],
      };
    }

    case GET_CATEGORIAS: {
      console.log(action.payload);
      return {
        ...state,
        categorias: [...action.payload],
      };
    }

    case "POST_PROD": {
      return {
        ...state,
        productos: action.payload,
      };
    }

    case SEARCHxNAME: {
      const productsFilter = state.productos.filter((e) =>
        e[0].nombre.toLowerCase().includes(action.payload.toLowerCase())
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
      console.log(prodFilter);
      console.log(state.productosHome);
      return {
        ...state,
        productosHome: prodFilter,
      };
    }

    case SEARCHxSUBCATEGORIA: {
      let prodFilter = state.productos.filter(
        (e) => e.subcategoria === action.payload
      );
      console.log(prodFilter);
      console.log(state.productosHome);
      return {
        ...state,
        productosHome: prodFilter,
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
