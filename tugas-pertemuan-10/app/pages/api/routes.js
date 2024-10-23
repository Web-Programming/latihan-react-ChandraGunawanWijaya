import react from "react";
const Home = react.lazy(() => import("./pages/Home/Home"));
const ListUser = react.lazy(() => import("./pages/ListUser/User"));
const CreateUser = react.lazy(() => import("./pages/CreateUser/Create"));
const UpdateUser = react.lazy(() => import("./pages/UpdateUser/Update"));

const routes = [
    { path : "/", component: Home },
    { path : "/User", component: ListUser },
    { path : "/User/Create", component: CreateUser },
    { path : "/User/Update", component: UpdateUser }
];
export default routes;