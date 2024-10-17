import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../../utils";

const Home: LazyExoticComponent<any> = lazy(
  () => import("../../pages/Dashboard/Home/Home")
);
const Create: LazyExoticComponent<any> = lazy(
  () => import("../../pages/Dashboard/Create")
);
const Chats: LazyExoticComponent<any> = lazy(
  () => import("../../pages/Dashboard/Chats")
);
const Explore: LazyExoticComponent<any> = lazy(
  () => import("../../pages/Dashboard/Explore")
);
const People: LazyExoticComponent<any> = lazy(
  () => import("../../pages/Dashboard/People")
);
const Reels: LazyExoticComponent<any> = lazy(
  () => import("../../pages/Dashboard/Reels")
);
const Saved: LazyExoticComponent<any> = lazy(
  () => import("../../pages/Dashboard/Saved")
);
function DashboardRoutes() {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/create",
      element: (
        <Suspense>
          <Create />
        </Suspense>
      ),
    },
    {
      path: "/people",
      element: (
        <Suspense>
          <People />
        </Suspense>
      ),
    },
    {
      path: "/chats",
      element: (
        <Suspense>
          <Chats />
        </Suspense>
      ),
    },
    {
      path: "/explore",
      element: (
        <Suspense>
          <Explore/>
        </Suspense>
      ),
    },
    {
      path: "/saved",
      element: (
        <Suspense>
          <Saved />
        </Suspense>
      ),
    },
    {
      path: "/reels",
      element: (
        <Suspense>
          <Reels />
        </Suspense>
      ),
    },
    {
      path: "/chats",
      element: (
        <Suspense>
          <Chats />
        </Suspense>
      ),
    },
  ]);
}

export default DashboardRoutes;
