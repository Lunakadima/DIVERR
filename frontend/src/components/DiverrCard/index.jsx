import { useNavigate } from 'react-router-dom';
import CardSticker from '../CardStiker';
import './style.css';
const DiverrCard = ({ diverr }) => {
  const navigate = useNavigate();
  return (
    <article
      className="diverrCard"
      onClick={(e) => navigate(`/diverr/${diverr.id}`)}
    >
      <img
        src={`${process.env.REACT_APP_BACKEND}/uploads/covers/${diverr.picture}`}
        alt={diverr.title}
      ></img>
      <CardSticker>{diverr.price} €</CardSticker>
      <p>{diverr.title}</p>
      {/* <p>
        <b>{diverr.category}</b>
      </p> */}

      {/* <p>{new Date(diverr.createdAt).toLocaleString()}</p> */}
    </article>
  );
};
export default DiverrCard;
