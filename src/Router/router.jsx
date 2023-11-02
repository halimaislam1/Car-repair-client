import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../LayOut/Root";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
// import CheckOut from "../pages/CheckOut/CheckOut";
import BookingService from "../pages/BookingService/BookingService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
       {
        path: '/',
        element: <Home></Home>
       },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/signup',
        element: <SignUp></SignUp>
       },
       {
        path: '/book/:id',
        element: <PrivateRoutes><BookingService></BookingService></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
       },
       {
        path: 'bookings',
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
        
       },
      ]
    },
  ]);

  export default router;