import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoute/MainLayoute/MainLayoute";
import HomePage from "../Page/HomePage/HomePage";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import ContactPage from "../Page/ContactPage/ContactPage";
import ProductPage from "../Page/ProductPage/ProductPage";
import AboutUS from "../Page/AboutUS/AboutUS";
import Journal from "../Page/Journal/Journal";
import SignUpPage from "../Page/SignUpPage/SignUpPage";
import LoginPage from "../Page/LoginPage/LoginPage";
import ProductDetails from "../Component/SharedComponent/ProductDetails/ProductDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoute></MainLayoute>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/ProductPage',
                element: <ProductPage></ProductPage>
            },
            {
                path: '/AboutUS',
                element: <AboutUS></AboutUS>
            },
            {
                path: '/ContactPage',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/Journal',
                element: <Journal></Journal>
            },
            {
                path: '/User/Login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/auth/newUser/signUpPage',
                element: <SignUpPage></SignUpPage>
            },
            {
                path: "/ProductDetails/:id",
                element: <ProductDetails></ProductDetails>
            },

        ]
    },
    // {
    //   path:'/dasboard',
    //   element: <PrivetRoute><DasboardLayout></DasboardLayout></PrivetRoute>,
    //   children:[
    //     {
    //       path: '/dasboard',
    //       element: <ProfailPage></ProfailPage>
    //     },

    //     {
    //       path: '/dasboard/admin',
    //       element: <Admin></Admin>
    //     },
    //     {
    //       path: '/dasboard/profile',
    //       element: <ProfailPage></ProfailPage>
    //     },
    //     {
    //       path: '/dasboard/cupon',
    //       element: <ManageCoupons></ManageCoupons>,
    //     },
    //     {
    //       path: '/dasboard/updatecupon/:id',
    //       element: <UpdateCupon></UpdateCupon>,
    //     },
    //     {
    //       path: '/dasboard/manageMember',
    //       element: <ManageMember></ManageMember>
    //     },
    //     {
    //       path: '/dasboard/updateMamber/:id',
    //       element: <UpdateMember></UpdateMember>
    //     },
    //     {
    //       path: '/dasboard/memberRequest',
    //       element: <PendingRequest></PendingRequest>
    //     },
    //     {
    //       path: '/dasboard/annoucement',
    //       element: <Announcement></Announcement>
    //     },
    //     {
    //       path: '/dasboard/manageAnnoucement',
    //       element: <MakeAnnouncement></MakeAnnouncement>
    //     },
    //     {
    //       path: '/dasboard/addApeartment',
    //       element: <PostAApeartment></PostAApeartment>
    //     },
    //     {
    //       path: '/dasboard/UpdateApeartment/:id',
    //       element: <UpdateApartment></UpdateApartment>
    //     },
    //     {
    //       path: '/dasboard/allPayments',
    //       element: <AllPaymentsDetails></AllPaymentsDetails>
    //     },
    //     {
    //       path: '/dasboard/makePayment',
    //       element: <MakePayment></MakePayment>
    //     },
    //     {
    //       path: '/dasboard/paymentHistory',
    //       element: <PaymentHistory></PaymentHistory>
    //     },
    //   ]
    // }
]);

export default Router;