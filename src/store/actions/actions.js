import { store } from "../store";

export function add(e) {
  store.dispatch({
    type: "ADD",
    payload: e.target.textContent,
  });
  window.scrollTo(0, 0);
}

export function remove(e) {
  store.dispatch({
    type: "REMOVE",
    payload: e.target.parentElement.dataset.id,
  });
  window.scrollTo(0, 0);
}

export function clear() {
  store.dispatch({
    type: "CLEAR",
  });
}
