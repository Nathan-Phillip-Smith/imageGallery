import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/photo" Component={LargePhoto}></Route>
      </Routes>
    </Router>
  );
};
export default App;
