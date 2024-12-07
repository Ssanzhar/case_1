import { useRoutes } from "react-router-dom";
import Home from "./Routes/Home";
import List from "./Routes/List";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/list",
      element: <List />,
    },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
