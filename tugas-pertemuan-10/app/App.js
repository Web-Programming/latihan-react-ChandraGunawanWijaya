import react from "react"; 
import {Route, Routes, NavlLink } from "react-router-dom";
import routes from "./pages/api/routes";

function App() {
    return (
        <React.Suspense fallback = {<div>Loading...</div>}>
            <div className="App">
                <h1>Chandra Gunawan Wijaya</h1>
                {/*MENU*/}
                <ul className="nav nav-tabs">
                    <li className="nav-items">
                        <NavLink to= "/" className="nav-link" exact = "true">
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to= "/User" className="nav-link">
                        User
                        </NavLink>
                    </li>
                </ul>
                {/*MAIN*/}
                <div className="main">
                    <Routes>
                        {routes.map((routes,i) => {
                            const { path, Component}  = routes; 
                            return <Route key = {i} path = {path} element = {<Component />} />;  
                        })}
                    
                    </Routes>
                </div>
            </div>
        </React.Suspense>
    );
}

export default App;