import { GET_PRODUCTOS } from "../actions/actions";

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
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTOS: {
      console.log(action.payload);
      return {
        ...state,
        productos: [...action.payload],
      };
    }

    default:
      return {
        ...state,
      };
  }
}

export default rootReducer;
