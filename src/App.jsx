import { useRoutes } from "react-router-dom";
import Home from "./Routes/Home";
import List from "./Routes/List";
import Input from "./components/Input/Input";

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
    {
      path: "/email",
      element: <Input />,
    },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;
