import {
  GET_PRODUCTOS,
  ALL_PRODUCTOS,
  SEARCHxNAME,
  SEARCHxCATEGORIA,
  SEARCHxSUBCATEGORIA,
  GET_DETAIL,
  ADD_PAGINATE,
  GET_USUARIOS,
  DELETE_PROD,
  DELETE_USER,
  DELETE_DEPO,
  GET_DEPOSITOS,
  GET_DETAIL_DEPO,
  GET_EMPRESAS,
  GET_ROLES,
  BLOCK_USER,
  UNBLOCK_USER,
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
  detailDepo: [],
  detailUser: [],
  roles: [],
  usuarios: [],
  usuariosBloqueados: [],
  empresas: [],
  depositos: [],
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
      };

    case GET_DEPOSITOS:
      return {
        ...state,
        depositos: [...action.payload],
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

    /****************** CREACIONES ******************/
    case "POST_PROD": {
      return {
        ...state,
        productos: action.payload,
      };
    }

    case "POST_USUARIOS": {
      console.log(action.payload);
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

    // case BLOCK_USER:
    //   let newUser = state.usuarios.find((u) => u.id === action.payload);

    //   let userBlocked = state.usuariosBloqueados.find(
    //     (u) => u.id === newUser.id
    //   );

    //   if (!userBlocked) {
    //     const newUserBlocked = { ...newUser, bloqueado: true };
    //     return {
    //       ...state,
    //       usuariosBloqueados: [...state.usuariosBloqueados, newUserBlocked],
    //     };
    //   } else {
    //     return {
    //       ...state,
    //     };
    //   }
    case BLOCK_USER:
      const userId = action.payload;
      const usuario = state.usuarios.find((u) => u.id === userId);

      if (usuario) {
        const newUserBlocked = { ...usuario, bloqueado: true };

        return {
          ...state,
          usuariosBloqueados: [...state.usuariosBloqueados, newUserBlocked],
          usuarios: state.usuarios.filter((u) => u.id !== userId),
        };
      }

      return {
        ...state,
      };

    case UNBLOCK_USER: {
      const userToUnblock = state.usuariosBloqueados.find(
        (user) => user.id === action.payload
      );
      if (userToUnblock) {
        const updatedUsuariosBloqueados = state.usuariosBloqueados.filter(
          (user) => user.id !== action.payload
        );
        const updatedUsuarios = state.usuarios.map((user) => {
          if (user.id === action.payload) {
            return { ...user, bloqueado: false };
          }
          return user;
        });
        return {
          ...state,
          usuarios: updatedUsuarios,
          usuariosBloqueados: updatedUsuariosBloqueados,
        };
      } else {
        return state;
      }
    }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
