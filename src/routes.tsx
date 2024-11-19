import { createBrowserRouter } from "react-router-dom"
import App from "./pages/App";
import Character from "./pages/Character";
import Fallback from "./components/fallback";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <Fallback />,
      children: [
        {
          path: "",
          element: (
            <App/>
            )
        },
        {
          path: ':id',
          errorElement: <Fallback />,
          element: (
            <Character/>
          )
        }
      ]
    }
  ]);
