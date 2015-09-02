import React from 'react'
import Router from 'react-router'
import {Route, RouteHandler} from 'react-router'
import Scan from './components/scan.js'
import Connect from './components/connect.js'
import Information from './components/information.js'
import UART from './components/uart.js'
import Control from './components/control.js'
import Sensor from './components/sensor.js'


// Define table of routes.
let routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="scan"    path="/scan"           handler={Scan}/>
    <Route name="connect" path="/connect/:index" handler={Connect}/>
  	<Route name="info"    path="/info/:index"    handler={Information}/>
  	<Route name="uart"    path="/uart/:index"    handler={UART}/>
  	<Route name="control" path="/control/:index" handler={Control}/>
  	<Route name="sensor"  path="/sensor/:index"  handler={Sensor}/>
  </Route>
);

// Main application component, will be rendered inside app.html's body.
// Just displays the currently selected route.
class App extends React.Component {
  render () {
    return (
      <div className="container-fluid">
    		<RouteHandler/>
      </div>
    );
  }
}

// Render the application.
export default Router.run(routes, Router.HashLocation, (Root) => {
  React.render(<Root/>, document.body);
});