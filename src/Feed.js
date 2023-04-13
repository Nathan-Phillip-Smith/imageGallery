import { useContext } from 'react';
import { FeedContext } from './Home';
import PhotoComp from './PhotoComp';

const Feed = () => {
  const { data } = useContext(FeedContext);
  return (
    <div className="feed">
      <ul className="Ul">
        {data.map((photo) => (
          <li key={photo.id} className="li">
            <PhotoComp photo={photo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;
