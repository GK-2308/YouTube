import { Children, useState } from "react";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SelectedVideo from "./components/SelectedVideo";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
        {
          path: "video/:query",
          element: <SelectedVideo />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        {/* <Head /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
