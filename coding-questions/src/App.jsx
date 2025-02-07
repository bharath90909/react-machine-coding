import Accordion from "./Accordion/Accordion";
// import AppLayout from "./AppLayout";
import Calculator from "./Calculator/Calculator";
import CheckBoxToggle from "./CheckBox Toggle/CheckBoxToggle";
import FilterWithCheckBox from "./CheckBox Toggle/FilterWithCheckBox";
import DigitalClock from "./Digital Clock/DigitalClock";
import ImageSlider from "./Image Slider/ImageSlider";
import LoadingProducts from "./Loading Products/LoadingProducts";
import NestedMenu from "./Nested Menu/NestedMenu";
import RouterPage from "./Nested Menu/RouterPage";
import SearchBar from "./SearchBar/SearchBar";
// import Practice from "./Quiz App/Practice";
import RandomColor from "./Random Color/RandomColor";
import StarRating from "./Star Rating/StarRating";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ThemeToggle from "./Theme Toggle With LocalStorage/ThemeToggle";
import ScrollIndicator from "./Scroll Indicator/ScrollIndicator";
import TabsSwitching from "./Tabs Switching/TabsSwitching";
import Modal from "./Modal/Modal";
import GithubProfileFinder from "./GitHub Profile Finder/GithubProfileFinder";
import OtpVerification from "./OTP Verification/OtpVerification";
import OtpVerificationWithArrows from "./OTP Verification/OtpVerificationWithArrows";
import PasswordVerification from "./Password Verification.jsx/PasswordVerification";
// import InfiniteScroll from "./Infinite Scroll/InfiniteScroll";
import QuizApp from "./Quiz App/QuizApp";
import TodoApp from "./Todo App/TodoApp";
import UserLogin from "./User Login/UserLogin";
import LoginForm from "./User Login/LoginForm";
import HomePage from "./User Login/HomePage";
import UserProvider from "./User Login/UserProvider";
import Practice from "./Random Color/Practice";
import CheckBoxTodo from "./CheckBox Todo/CheckBoxTodo";
import ScrollTop from "./Scroll Top/ScrollTop";
import Pagination from "./Pagination/Pagination";
import InfiniteScroll from "./Pagination/InfiniteScroll";
import AppLayout from "./Router Navigation/AppLayout";
import Home from "./Router Navigation/Home";
import About from "./Router Navigation/About";
import Contact from "./Router Navigation/Contact";
import AutoSearch from "./Auto Search Fill/AutoSearch";
import Theme from "./custom-hook/Theme";
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
  return <Theme />;
  // return <AutoSearch />;
}

export default App;
