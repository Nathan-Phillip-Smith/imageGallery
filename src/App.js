import { BrowserRouter, Router, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/" Component={Home} />
        <Route path="/photo" Component={LargePhoto}></Route>
      </Router>
    </>
  );
};
export default App;
