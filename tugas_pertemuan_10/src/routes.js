import React from "react";
const Home = React.lazy(() => import("./Home"));
const List = React.lazy(() => import("./List"));
const Detail = React.lazy(() => import("./Detail"));
const Create = React.lazy(() => import("./Create"));
const Update = React.lazy(() => import("./Update"));

const routes = [
    { path: "/", exact: true, Component: Home },        // Pastikan path "/" hanya cocok dengan homepage
    { path: "/user", exact: true, Component: List },    // Menambahkan '/' di depan path
    { path: "/user/detail", exact: true, Component: Detail },
    { path: "/user/create", exact: true, Component: Create },
    { path: "/user/update", exact: true, Component: Update },
];

export default routes;
