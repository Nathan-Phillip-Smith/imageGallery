import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/imageGallery" Component={Home} />
        <Route exact path="/imageGallery/photo" Component={LargePhoto}></Route>
      </Routes>
    </>
  );
};
export default App;
