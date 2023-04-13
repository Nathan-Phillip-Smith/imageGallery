import { HashRouter, Router, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <HashRouter>
      <Router basename={`/`}>
        <Route path="/" Component={Home} />
        <Route path="/photo" Component={LargePhoto}></Route>
      </Router>
    </HashRouter>
  );
};
export default App;
