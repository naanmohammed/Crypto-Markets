import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaArrowRight } from 'react-icons/fa';
import { fetchCoins } from '../../Redux/Crypto/CryptoSlice';
import './home.css';

const HomeItem = (props) => {
  const { crypto } = props;

  const {
    id, name, symbol, price, img, rank,
  } = crypto;

  return (
    <li className="listItem">
      <div className="homeItem" id={id}>
        <div className="home-item-img">
          <Link to={`/details/${id}`}>
            <img src={img} alt={name} />
          </Link>
        </div>
        <div className="home-item-info">
          <p>#{rank}</p>
          <h3 className="name">{name}</h3>
          <p className="symbol">{symbol}</p>
          <p>${price}</p>
        </div>
        <Link to={`/details/${id}`}>
          <FaArrowRight className="fontIcon" />
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

const HomeList = () => {
  const [query, setQuery] = useState('');
  const Search = (event) => {
    setQuery(event.target.value);
  };

  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(query.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
    // eslint-disable-next-line
  }, [dispatch, fetchCoins]);

  return (
    <>
      <div className="home">
        <ul className="homeList">
          {filteredCrypto.map((crypto) => (
            <HomeItem key={crypto.id} crypto={crypto} />
          ))}
        </ul>
      </div>
    </>
  );
};

const HomeContainer = () => {
  return <HomeList />;
};

export default HomeContainer;
