import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import arrow from '../../Assets/right-arrow.png';

const HomeItem = (props) => {
  const { crypto } = props;

  const {
    id, name, symbol, price, img, rank,
  } = crypto;

  return (
    <li className="listItem">
      <div
        className="homeItem"
        id={id}
      >
        <div className="home-item-img">
          <Link
            to={`/details/${id}`}
          >
            <img src={img} alt={name} />
          </Link>
        </div>
        <div className="home-item-info">
          <p>
            #
            {rank}
          </p>
          <h3 className="name">{name}</h3>
          <p className="symbol">{symbol}</p>
          <p>
            $
            {price}
          </p>
        </div>
        <Link
          to={`/details/${id}`}
        >
          <img src={arrow} alt={name} className="arrow" />
        </Link>
      </div>
    </li>
  );
};

HomeItem.propTypes = {
  crypto: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    rank: PropTypes.number.isRequired,
  }).isRequired,
};

export default HomeItem;
