import * as actions from "../actions/actionsType";
import info from "../../assets/data.json";

const defaultState = {
  filterItems: [],
  listings: [...info],
};

export default function filterReducer(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD:
      return state.filterItems.includes(action.payload)
        ? state
        : { ...state, filterItems: [...state.filterItems, action.payload] };
    case actions.REMOVE:
      const filterTemp = state.filterItems;
      filterTemp.splice(action.payload, 1);
      return { ...state, filterItems: [...filterTemp] };
    case actions.CLEAR:
      return { ...state, filterItems: [] };
    default:
      return state;
  }
}
