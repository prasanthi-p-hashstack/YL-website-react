import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index"; // Make sure this is the correct path

// Redux DevTools integration (optional)
const store = createStore(
  reducers, // Reducers must be a valid function
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For debugging with Redux DevTools
);

export default store;
