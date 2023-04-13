import { BrowserRouter as HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/photo" Component={LargePhoto}></Route>
      </Routes>
    </HashRouter>
  );
};
export default App;
