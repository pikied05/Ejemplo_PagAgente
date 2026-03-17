import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { ThankYouPage } from "./pages/ThankYouPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/gracias",
    Component: ThankYouPage,
  },
]);
