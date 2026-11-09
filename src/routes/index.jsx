import { Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FounderPage from "../pages/FounderPage";

/*
  Route table. To add a page: create a component in src/pages and add an entry
  here. Redirects use <Navigate replace /> (mirror them in vercel.json for
  server-side 301s).
*/
export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/daliborbuljovcic", element: <FounderPage /> },
  {
    path: "/founder",
    element: <Navigate to="/daliborbuljovcic" replace />,
  },
  // Unknown URLs fall back to home.
  { path: "*", element: <Navigate to="/" replace /> },
];
