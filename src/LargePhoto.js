import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LargePhoto = () => {
  const location = useLocation();
  const { image, user, fromImage } = location.state;
  console.log(user);

  return (
    <div>
      <div className="navbar">
        <h1>Image Gallery</h1>

        <div className="categories">
          <Link to="/" className="category" style={{ fontWeight: '100' }}>
            Return To Gallery
          </Link>
        </div>
      </div>
      <div className="img-info">
        <img className="large-img" src={image.regular}></img>
      </div>
    </div>
  );
};
export default LargePhoto;
