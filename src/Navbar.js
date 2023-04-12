import categories from './data';
import { useContext, useState } from 'react';
import { FeedContext } from './App';

const Navbar = () => {
  const [bold, setBold] = useState('wallpapers');
  const { url, setUrl } = useContext(FeedContext);
  return (
    <div className="navbar">
      <h1>Image Gallery</h1>

      <div className="categories">
        {categories.map((category) => {
          return (
            <a
              className="category"
              key={category.id}
              href="#"
              style={
                bold === category.slug
                  ? { fontWeight: '400' }
                  : { fontWeight: '100' }
              }
              onClick={() => {
                setUrl(
                  'https://api.unsplash.com/topics/' +
                    category.slug +
                    '/photos/?per_page=30&client_id=YofUCMZ1_mklUXWkA2rdZI2PeIzXlI05p7hC4SaQwTQ'
                );
                setBold(category.slug);
              }}
            >
              {category.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Navbar;
