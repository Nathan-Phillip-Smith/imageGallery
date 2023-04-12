import { useEffect, useState, createContext } from 'react';
import Feed from './Feed';
import Navbar from './Navbar';
import categories from './data';

export const FeedContext = createContext();

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    'https://api.unsplash.com/topics/' +
      categories[0].slug +
      '/photos/?per_page=30&client_id=YofUCMZ1_mklUXWkA2rdZI2PeIzXlI05p7hC4SaQwTQ'
  );

  useEffect(() => {
    async function getImages() {
      try {
        const response = await fetch(url);
        const images = await response.json();
        setData(images);
      } catch (error) {
        console.log(error);
      }
    }
    getImages();
  }, [url]);

  return (
    <FeedContext.Provider value={{ data, setData, url, setUrl }}>
      <Navbar />
      <Feed data={data} />
    </FeedContext.Provider>
  );
}

export default App;
