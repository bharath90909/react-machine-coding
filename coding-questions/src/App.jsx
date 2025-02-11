import Accordion from "./accordion/Accordion";
// import AppLayout from "./AppLayout";
import Calculator from "./calculator/Calculator";
import CheckBoxToggle from "./checkbox-toggle/CheckBoxToggle";
import FilterWithCheckBox from "./checkbox-toggle/FilterWithCheckBox";
import DigitalClock from "./digital-clock/DigitalClock";
import ImageSlider from "./image-slider/ImageSlider";
import LoadingProducts from "./loading-products/LoadingProducts";
import NestedMenu from "./nested-menu/NestedMenu";
import RouterPage from "./nested-menu/RouterPage";
import SearchBar from "./search-bar/SearchBar";
// import Practice from "./Quiz App/Practice";
import RandomColor from "./random-color/RandomColor";
import StarRating from "./star-rating/StarRating";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeToggle from "./theme-toggle-with-localStorage/ThemeToggle";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";
import TabsSwitching from "./tabs-switching/TabsSwitching";
import Modal from "./modal/Modal";
import GithubProfileFinder from "./gitHub-profile-finder/GithubProfileFinder";
import OtpVerification from "./otp-verification/OtpVerification";
import OtpVerificationWithArrows from "./otp-verification/OtpVerificationWithArrows";
import PasswordVerification from "./password- verification.jsx/PasswordVerification";
// import InfiniteScroll from "./Infinite Scroll/InfiniteScroll";
import QuizApp from "./quiz-app/QuizApp";
import TodoApp from "./todo-app/TodoApp";
import UserLogin from "./user-login/UserLogin";
import LoginForm from "./user-login/LoginForm";
import HomePage from "./user-login/HomePage";
import UserProvider from "./user-login/UserProvider";
import Practice from "./random-color/Practice";
import CheckBoxTodo from "./checkbox-todo/CheckBoxTodo";
import ScrollTop from "./scroll-top/ScrollTop";
import Pagination from "./pagination/Pagination";
import InfiniteScroll from "./pagination/InfiniteScroll";
import AppLayout from "./router-navigation/AppLayout";
import Home from "./router-navigation/Home";
import About from "./router-navigation/About";
import Contact from "./router-navigation/Contact";
import AutoSearch from "./auto-search-fill/AutoSearch";
import Theme from "./custom-hook/Theme";
import DynamicImport from "./dynamic-import/DynamicImport";
// import DropDown from "./drop-down/DropDown";
import DropDown from "./searchable-dropdown/DropDown";
import RestaurantCard from "./multi-step-form/RestaurantCard";
import Hoc from "./hoc/HOC";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <AppLayout />,
  //     children: [
  //       {
  //         path: "/home/:dynamicID",
  //         element: <RouterPage />,
  //       },

  //       {
  //         path: "/about/:dynamicID",
  //         element: <RouterPage />,
  //       },

  //       {
  //         path: "/contact/:dynamicID",
  //         element: <RouterPage />,
  //       },
  //     ],
  //   },
  // ]);
  // return <Accordion />;
  // return <RandomColor />;
  // return <StarRating />;/
  // return <ImageSlider />;
  // return <LoadingProducts />;
  // return <DigitalClock />;
  // return <Calculator />;
  // return <CheckBoxToggle />;
  // return <FilterWithCheckBox />;
  // return <RouterProvider router={appRouter} />;
  // return <ThemeToggle />;
  // return <ScrollIndicator />;
  // return <TabsSwitching />;
  // return <Modal />;
  // return <GithubProfileFinder />;
  // return <OtpVerification />;
  // return <OtpVerificationWithArrows />;
  // return <PasswordVerification />;
  // return <InfiniteScroll />;
  // return <QuizApp />;/
  // return <Practice />;
  // // return <TodoApp />;
  // const loginRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <UserLogin />,
  //     children: [
  //       {
  //         path: "/login",
  //         element: <LoginForm />,
  //       },
  //       {
  //         path: "/homepage",
  //         element: <HomePage />,
  //       },
  //     ],
  //   },
  // ]);
  // return (
  //   <UserProvider>
  //     <RouterProvider router={loginRouter}></RouterProvider>
  //   </UserProvider>
  // );
  // return <Practice />;
  // return <SearchBar />;
  // return <CheckBoxTodo />;
  // return <ScrollTop />;
  // return <Pagination />;
  // return <InfiniteScroll />;
  // return <RouterProvider router={appRouter} />;\
  // return <Theme />;
  // return <AutoSearch />;
  // return <DynamicImport/>
  // return <DropDown/>
  // return <RestaurantCard />;
  // return <DropDown />;
  return <Hoc />;
}

export default App;
