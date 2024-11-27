import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import NewCakeContainer from "./components/NewCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
