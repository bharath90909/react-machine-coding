import Accordion from "./Accordion/Accordion";
import AppLayout from "./AppLayout";
import Calculator from "./Calculator/Calculator";
import CheckBoxToggle from "./CheckBox Toggle/CheckBoxToggle";
import FilterWithCheckBox from "./CheckBox Toggle/FilterWithCheckBox";
import DigitalClock from "./Digital Clock/DigitalClock";
import ImageSlider from "./Image Slider/ImageSlider";
import LoadingProducts from "./Loading Products/LoadingProducts";
import NestedMenu from "./Nested Menu/NestedMenu";
import RouterPage from "./Nested Menu/RouterPage";
import RandomColor from "./Random Color/RandomColor";
import StarRating from "./Star Rating/StarRating";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/home/:dynamicID",
          element: <RouterPage />,
        },

        {
          path: "/about/:dynamicID",
          element: <RouterPage />,
        },

        {
          path: "/contact/:dynamicID",
          element: <RouterPage />,
        },
      ],
    },
  ]);
  // return <Accordion />;
  // return <RandomColor />;
  // return <StarRating />;/
  // return <ImageSlider />;
  // return <LoadingProducts />;
  // return <DigitalClock />;
  // return <Calculator />;
  // return <CheckBoxToggle />;
  // return <FilterWithCheckBox />;
  return <RouterProvider router={appRouter} />;
}

export default App;
