import React from "react";
import {Route ,Switch } from 'react-router'
import AgriPurchase from "./AgriPurchase"
import Agriinput from "./Agriinput";
import Supplier from "./Supplier";
import AgriinputPurchase from "./AgriinputPurchase";
import Taxmaster from "./Taxmaster";
import MainMenue from "./MainMenue";
import Pending from "./Pending";
import Executed from "./Executed";
import Completed from "./Completed";
import Executing from "./Executing";

function App() {
  return (
    <>
    <div className="maindiv">
      <MainMenue />
      <Switch>
      <Route exact path="/agripurchase" component={AgriPurchase}/>
      <Route exact path="/agriinput" component={Agriinput}/>
      <Route exact path="/supplier" component={Supplier}/>
      <Route exact path="/" component={AgriinputPurchase}/>
      <Route exact path="/taxmaster" component={Taxmaster}/>  
      <Route exact path="/agri/pending" component={Pending}/>
      <Route exact path="/agri/executing" component={Executing}/>
      <Route exact path="/agri/executed" component={Executed}/>
      <Route exact path="/agri/completed" component={Completed}/>
      </Switch>
    </div>
    </>
  );
}

export default App;
