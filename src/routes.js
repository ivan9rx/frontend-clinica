import { BrowserRouter as Router, Route } from 'react-router-dom';


import Header from "./components/header";
import SideBar from "./components/sidebar";

import './styles.css';



const Routes = () => {
    return (
        <>

            <div className="container-fluid h-1oo">
                <div className="row h-100">
                    <Router>
                        <SideBar/>

                    </Router>
                </div>
            </div>
        </>
    );
};

export default Routes;