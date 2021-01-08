import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Start from './pages/Start';
import About from './pages/About';
import Home from './pages/portfolio/Home';

const Layout = (): React.ReactElement => {
  // const { projects } = useContext(ProjectsContext);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Start} />
        <Route path='/about' component={About} />
        <Route path='/home' component={Home} />
      </Switch>
    </Router>
  );
};

export default Layout;
