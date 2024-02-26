import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Agendamentos from './pages/agendamentos';
import Clientes from './pages/clientes';



import './styles.css';



const Routes = () => {
    return (
        <>
            <Header/>
            <div className="container-fluid h-1oo" >
                <div className="row h-100">
                    <Router>
                        <Sidebar />
                        <Switch>
                            <Route path="/" exact component={Agendamentos} />
                            <Route path="/clientes" exact component={Clientes} />
                        </Switch>
                    </Router>
                </div>
            </div>
        </>
    );
};

export default Routes;