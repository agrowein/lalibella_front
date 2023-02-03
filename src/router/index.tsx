import { StartPage } from "../pages/start.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    element: <StartPage />
  }
]);

export default router;