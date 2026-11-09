import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { RouteScrollReset } from "./components/RouteScrollReset";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollReset />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
