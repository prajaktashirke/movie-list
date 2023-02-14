import "./App.css";
import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Routers from "./Routers";
import { BrowserRouter } from 'react-router-dom';
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        {/* happy to start */}
        <Routers />
        </BrowserRouter>
      </div>
      </Provider>
  );
}

export default App;
