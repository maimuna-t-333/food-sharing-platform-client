import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import FoodDetails from "../Pages/Home/FoodDetails";
import PrivateRoute from "../Routes/PrivateRoute";
import AddFood from "../Pages/AddFood/AddFood";
import AvailableFood from "../Pages/AvailableFood/AvailableFood";


const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
        {
            index:true,
            Component:Home
        },
        {
          path:'signUp',
          Component:SignUp
        },
        {
          path:'login',
          Component:Login
        },
        {
          path:'/foods/:id',
          Component:FoodDetails,
          loader:({params})=>fetch(`http://localhost:3000/foods/${params.id}`)
        },
        {
          path:'/addFood',
          element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
          path:'/availableFood',
          Component:AvailableFood,
          
        }

    ]
  },
]);

export default router;