import ReactDOM from "react-dom";
import App from "./App";
import "./style.css"
import { history, HistoryRouter } from "@src/utils/router";

ReactDOM.render(
  <HistoryRouter history={history}>
    <App />
  </HistoryRouter>,
  document.getElementById("root")
);
