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
      <div className="img-container">
        <img className="large-img" src={image.regular}></img>
        <div className="img-info">
          <div className="photographer">
            <h2>
              {user.first_name} {user.last_name}
            </h2>
            <img src={user.profile_image.medium}></img>
          </div>
          {user.bio && <p>Bio: {user.bio}</p>}
        </div>
      </div>
    </div>
  );
};
export default LargePhoto;
