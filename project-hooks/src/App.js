import { useContext } from "react";
import { AuthContext } from "./context/auth-context";

import Ingredients from "./components/Ingredients/Ingredients";
import Auth from "./components/Auth";

function App() {
  const auchCtx = useContext(AuthContext);

  let content = <Auth />;
  if (auchCtx.isAuth) {
    content = <Ingredients />;
  }

  return content;
}

export default App;
