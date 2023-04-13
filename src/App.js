import { BrowserRouter, HashRouter, Router, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <BrowserRouter>
      <HashRouter>
        <Router basename={`/`}>
          <Route path="/" Component={Home} />
          <Route path="/photo" Component={LargePhoto}></Route>
        </Router>
      </HashRouter>
    </BrowserRouter>
  );
};
export default App;
