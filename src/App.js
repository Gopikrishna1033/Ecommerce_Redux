import {Provider} from "react-redux";
import store from "./redux/store"
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        hello developer 

      </Provider>
      
    </div>
  );
}

export default App;
