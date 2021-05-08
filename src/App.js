import React, { useState, useEffect } from "react";
import Header from "./components/header.js";
import FilterSection from "./components/filterSection";
import DisplayCards from "./functions/displayCards.js";
import { filters } from "./functions/filterListings";

import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const info = require("./assets/data.json");
  let state = store.getState();
  const [listings, setListings] = useState([...state.listings]);
  const [filterItems, setFilterItems] = useState([]);

  useEffect(() => {
    setFilterItems(store.getState().filterItems);

    if (filterItems.length > 0) {
      const filteredListings1 = filters(info, filterItems);
      setListings(filteredListings1);
    } else {
      setListings(info);
    }

    const unsubscribe = store.subscribe(() => {
      setFilterItems(store.getState().filterItems);
    });

    return unsubscribe;
  }, [filterItems, info]);

  return (
    <Provider store={store}>
      <Header />
      <FilterSection filterItems={filterItems} />
      {DisplayCards(listings)}
    </Provider>
  );
}

export default App;
