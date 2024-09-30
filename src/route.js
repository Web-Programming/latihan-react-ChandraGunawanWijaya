import React from "react";

const Home = React.lazy(() => import("./Hello"));
const product = React.lazy(() => import("./Product"));
const Register = React.lazy(() => import("./Register"));

const routes = [
    {path : "/" , Component : Home},
    {path : "/product" , Component : Product},
    {path : "/register" , Component : Register},
];

export default routes;
