import { Link } from 'react-router-dom';

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <>
      <Link
        className="img"
        to="/photo"
        state={{ image: urls, user: user, fromImage: true }}
      >
        <img className="img" src={urls.regular}></img>
      </Link>
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </>
  );
};

export default PhotoComp;
