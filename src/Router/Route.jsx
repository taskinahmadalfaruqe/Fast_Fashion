import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layoute/MainLayoute/MainLayoute";
import HomePage from "../Page/HomePage/HomePage";
import ErrorPage from "../Page/ErrorPage/ErrorPage";
import ContactPage from "../Page/ContactPage/ContactPage";
import ProductPage from "../Page/ProductPage/ProductPage";

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
                path: '/ContactPage',
                element: <ContactPage></ContactPage>
            },
            {
                path: '/ProductPage',
                element: <ProductPage></ProductPage>
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