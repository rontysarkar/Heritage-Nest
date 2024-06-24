import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Main/Main";
import Buyer from "../Pages/Buyer.jsx/Buyer";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/buy',
          element:<Buyer/>
        },
        {
          path:'/propertyDetails',
          element:<PropertyDetails/>
        }
      ]
    },
  ]);

export default router;