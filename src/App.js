import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import LargePhoto from './LargePhoto';

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/photo" Component={LargePhoto}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
