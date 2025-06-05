import { Provider } from "react-redux";

import BiologyLab from "./BiologyLab";
import { store } from "./new-store";
import Classroom from "./RtkChild";

function Index4() {
  return (
    <Provider store={store}>
      {/* <BiologyLab></BiologyLab> */}
      <Classroom />
    </Provider>
  );
}

export default Index4;
