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
  DELETE_EMPRESA,
  GET_DEPOSITOS,
  GET_DETAIL_DEPO,
  GET_EMPRESAS,
  GET_ROLES,
  GET_TIPOS,
  GET_CATEG,
  GET_SUBCATEG,
} from "../actions/actions";

const initialState = {
  productos: [],
  productosHome: [],
  categorias: [],
  subcategorias: [],
  detail: [],
  detailDepo: [],
  detailUser: [],
  roles: [],
  usuarios: [],
  empresas: [],
  depositos: [],
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
      };

    case GET_DEPOSITOS:
      return {
        ...state,
        depositos: [...action.payload],
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
        usuariosBloqueados: state.usuariosBloqueados.filter(
          (user) => user.id !== action.payload
        ),
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
        empresas: state.empresas.filter((emp) => emp.id !== action.payload),
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
    //   const userId = action.payload;
    //   const usuario = state.usuarios.find((u) => u.id === userId);

    //   if (usuario) {
    //     const newUserBlocked = { ...usuario, bloqueo: true };

    //     return {
    //       ...state,
    //       usuariosBloqueados: [...state.usuariosBloqueados, newUserBlocked],
    //       usuarios: state.usuarios.filter((u) => u.id !== userId),
    //     };
    //   }

    //   return {
    //     ...state,
    //   };

    // case UNBLOCK_USER: {
    //   const userToUnblock = state.usuariosBloqueados.find(
    //     (user) => user.id === action.payload
    //   );
    //   if (userToUnblock) {
    //     const updatedUsuariosBloqueados = state.usuariosBloqueados.filter(
    //       (user) => user.id !== action.payload
    //     );
    //     const updatedUsuarios = state.usuarios.map((user) => {
    //       if (user.id === action.payload) {
    //         return { ...user, bloqueo: false };
    //       }
    //       return user;
    //     });
    //     return {
    //       ...state,
    //       usuarios: updatedUsuarios,
    //       usuariosBloqueados: updatedUsuariosBloqueados,
    //     };
    //   } else {
    //     return state;
    //   }
    // }

    // case BLOCK_EMPRESA:
    //   const empresaId = action.payload;
    //   const empresa = state.empresas.find((e) => e.id === empresaId);

    //   if (empresa) {
    //     const newEmpresaBlocked = { ...empresa, bloqueo: true };

    //     return {
    //       ...state,
    //       empresasBloqueadas: [...state.empresasBloqueadas, newEmpresaBlocked],
    //       empresas: state.empresas.filter((e) => e.id !== empresaId),
    //     };
    //   }

    //   return {
    //     ...state,
    //   };

    // case UNBLOCK_EMPRESA: {
    //   const empresaToUnblock = state.empresasBloqueadas.find(
    //     (empresa) => empresa.id === action.payload
    //   );
    //   if (empresaToUnblock) {
    //     const updatedEmpresasBloqueadas = state.empresasBloqueadas.filter(
    //       (empresa) => empresa.id !== action.payload
    //     );
    //     const updatedEmpresas = state.empresas.map((empresa) => {
    //       if (empresa.id === action.payload) {
    //         return { ...empresa, bloqueo: false };
    //       }
    //       return empresa;
    //     });
    //     return {
    //       ...state,
    //       empresas: updatedEmpresas,
    //       empresasBloqueadas: updatedEmpresasBloqueadas,
    //     };
    //   } else {
    //     return state;
    //   }
    // }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
