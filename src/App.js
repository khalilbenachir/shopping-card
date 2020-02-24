import React from "react";
import "./App.css";
import Title from "./component/title";
import ShppingCard from "./container/shopping-card";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <Title />
        <ShppingCard />
      </div>
    </Provider>
  );
}

export default App;
