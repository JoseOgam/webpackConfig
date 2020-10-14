import React from "react"
import {Route, Switch} from "react-router-dom"
import NavBar from "./common/NavBar"
import Contact from "./contact/Contact"
import Homepage from "./homepage/Homepage"
const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/contact" component={Contact} />
           </Switch>
        </div>
    )
}

export default App