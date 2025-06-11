import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";


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
        }
    ]
  },
]);

export default router;