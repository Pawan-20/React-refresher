import { Provider } from "react-redux";

import BiologyLab from "./BiologyLab";
import { store } from "./new-store";

function Index4() {
  return (
    <Provider store={store}>
      <BiologyLab></BiologyLab>
    </Provider>
  );
}

export default Index4;
