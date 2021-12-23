import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./pages/mainPage";
import SecondPage from "./pages/secondPage";



const App = () => {




    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}/>
                <Route exact path="/secondaryPage" component={SecondPage}/>
            </Switch>

        </Router>
    );
};

export default App;