// RouterConfig.tsx
import { useRoutes } from "react-router-dom";
import UserRegister from "../layout/HomeLayout/UserRegister";
import React from "react";
import { HomeLayout } from "../layout/HomeLayout/HomeLayout";
import { LoginTemplate } from "../layout/HomeLayout/LoginTemplate";
import { PATH } from "../constants/config";

const RouterConfig = () => {
  const routes = useRoutes([
    {
      element: <HomeLayout />,
      children: [],
    },
    {
      path: PATH.register,
      element: <UserRegister />,
    },
    {
      path: PATH.login,
      element: <LoginTemplate />,
    },
  ]);

  return routes;
};

export default RouterConfig;
