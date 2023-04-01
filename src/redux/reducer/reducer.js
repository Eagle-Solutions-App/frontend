import { GET_PRODUCTOS, SEARCHxNAME } from "../actions/actions";

const initialState = {
  productos: [
    {
      id: 1,
      nombre: "Cemento",
      categoria: "Bien de Consumo",
      subcategoria: "Materiales",
    },
    {
      id: 2,
      nombre: "Taladro",
      categoria: "Bien de Uso",
      subcategoria: "Equipos",
    },
    {
      id: 3,
      nombre: "Piedra",
      categoria: "Bien de Consumo",
      subcategoria: "Materiales",
    },
    {
      id: 4,
      nombre: "Excavadora",
      categoria: "Bien de Uso",
      subcategoria: "Máquinas",
    },
    {
      id: 5,
      nombre: "Arena",
      categoria: "Bien de Consumo",
      subcategoria: "Materiales",
    },
    {
      id: 6,
      nombre: "Pala",
      categoria: "Bien de Uso",
      subcategoria: "Equipos",
    },
  ],
  productosHome: [
    {
      id: 1,
      nombre: "Cemento",
      categoria: "Bien de Consumo",
      subcategoria: "Materiales",
    },
    {
      id: 2,
      nombre: "Taladro",
      categoria: "Bien de Uso",
      subcategoria: "Equipos",
    },
    {
      id: 3,
      nombre: "Piedra",
      categoria: "Bien de Consumo",
      subcategoria: "Materiales",
    },
    {
      id: 4,
      nombre: "Excavadora",
      categoria: "Bien de Uso",
      subcategoria: "Máquinas",
    },
    {
      id: 5,
      nombre: "Arena",
      categoria: "Bien de Consumo",
      subcategoria: "Materiales",
    },
    {
      id: 6,
      nombre: "Pala",
      categoria: "Bien de Uso",
      subcategoria: "Equipos",
    },
  ],
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

    case SEARCHxNAME: {
      const productsFilter = state.productos.filter((e) =>
        e.nombre.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        productosHome: [...productsFilter],
      };
    }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
