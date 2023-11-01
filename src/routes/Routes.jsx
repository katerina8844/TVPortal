import {createBrowserRouter} from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import loadable from '@loadable/component';

const LazyLoginPage = loadable(() => import("../pages/LoginPage.jsx"), {
    fallback: <></>,
});
const LazyMainPage = loadable(() => import("../pages/MainPage.jsx"), {
    fallback: <></>,
});
const LazyTvPage = loadable(() => import("../pages/TVpage.jsx"), {
    fallback: <></>,
});
const LazyRestaurantPage = loadable(() => import("../pages/RestaurantPage.jsx"), {
    fallback: <></>,
});
const LazyExcursionsPage = loadable(() => import("../pages/ExcursionsPage.jsx"), {
    fallback: <></>,
});
const LazyOneExcursionPage = loadable(() => import("../pages/OneExcursionPage.jsx"), {
    fallback: <></>,
});
const LazyServicePage = loadable(() => import("../pages/ServicePage.jsx"), {
    fallback: <></>,
});
const LazyBuscketPage = loadable(() => import("../pages/BasketPage.jsx"), {
    fallback: <></>,
});

export const routes = createBrowserRouter([
    { path: "/", element: <LazyLoginPage/> },
    { path: "/tv", element: <LazyTvPage/> },
    { path: "/restaurant", element: <LazyRestaurantPage/> },
    { path: "/excursions", element: <LazyExcursionsPage/> },
    { path: "/excursions/:id", element: <LazyOneExcursionPage/> },
    { path: "/service", element: <LazyServicePage/> },
    { path: "/basket", element: <LazyBuscketPage/> },
    { path: "/main", element: <LazyMainPage/> ,

        children: [
            {
                path: "dashboard",
                element: <NotFoundPage/>,
            },
        ],
    },
    { path: "*", element: <NotFoundPage/> },
    { path: "/excursions/*", element: <NotFoundPage/> },

]);