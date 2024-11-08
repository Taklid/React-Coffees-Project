import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home";
import Dasbord from "../Pages/Dasbord";
import Coffees from "../Pages/Coffees";
import CoffeeCards from "../Component/CoffeeCards";
import CoffeeDtls from "../Pages/CoffeeDtls";

  

const router = createBrowserRouter([
    {
      path: "/",
      element:<MainLayouts></MainLayouts>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('../categories.json'),
            children: [
                {
                   path:'/' ,
                   element: <CoffeeCards></CoffeeCards>,
                   loader: () => fetch ('../coffees.json')
                },
                {
                   path:'/category/:category' ,
                   element: <CoffeeCards></CoffeeCards>,
                   loader: () => fetch ('../coffees.json')
                },
            ],
        },
        {
            path: '/coffees',
            element: <Coffees></Coffees>,
            loader: () => fetch ('../coffees.json')
        },
        {
            path: '/dasboard',
            element: <Dasbord></Dasbord>
        },
        {
          path: '/coffee/:id',
          element: <CoffeeDtls></CoffeeDtls>,
          loader: () => fetch ('../coffees.json')
      },
      ]
    },
  ]);

export default router;