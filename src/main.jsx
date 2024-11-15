import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import ProductPage from './Pages/Products';
import Faq from './Pages/Faq';
import ContactPage from './Pages/Contact';
import ProductGallery from './Pages/ProductGellary';
import Errorpage from './Pages/Errorpage';
import Organogram from './Pages/Organogram';
import MissionInfographic from './Pages/Mission';
import Md from './Pages/Md';
import CategoryDisplay from './Pages/CategoryDisplay';
import FashionAccessories from './Pages/FashionAccessories';
import HomeTextile from './Pages/HomeTextile';
import NonTextile from './Pages/NonTextile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errorpage/>,
    children:[
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/aboutus",
        element: <AboutUs/>,
      },
      {
        path: "/ourproducts",
        element: <ProductPage/>,
      },
      {
        path: "/our-company/organogram",
        element: <Organogram/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
      {
        path: "/gallery",
        element: <ProductGallery/>,
      },
      {
        path: "/our-company/mission",
        element: <MissionInfographic/>,
      },
      {
        path: "/our-company/md",
        element: <Md/>,
      },
      {
        path: "/gallery/:category/:subcategory",
        element: <CategoryDisplay/>,
      },
      {
        path: "/gallery/fashion-accessories",
        element: <FashionAccessories/>,
      },
      {
        path: "/gallery/home-textile",
        element: <HomeTextile/>,
      },
      {
        path: "/gallery/non-textile",
        element: <NonTextile/>,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
