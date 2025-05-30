import Classrooms from "./Classrooms";
import { Provider } from "react-redux";
import store from "./Store";

function RTKIndex2() {
  return (
    <Provider store={store}>
      <Classrooms></Classrooms>
    </Provider>
  );
}

export default RTKIndex2;
