import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <>
      <Router>
        <Route path="/imageGallery" Component={Home} />
        <Route path="/imageGallery/photo" Component={LargePhoto}></Route>
      </Router>
    </>
  );
};
export default App;
