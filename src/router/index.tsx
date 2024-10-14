import { lazy, LazyExoticComponent } from "react";
import { useRoutes } from "react-router-dom";
import { SuspenseComponent as Suspense } from "../utils";

const Home : LazyExoticComponent<any> = lazy(() => import('../pages/Login/Login'))
const Register : LazyExoticComponent<any> = lazy(() => import('../pages/Register/Register'))

const Routers = () => {
    return useRoutes ([
        {
            path: '/',
            element: <Suspense><Home/></Suspense>
        },
        {
            path: '/register',
            element: <Suspense><Register/></Suspense>,
        },
    ])
}

export default Routers