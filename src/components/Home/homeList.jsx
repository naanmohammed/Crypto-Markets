import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomeItem from './homeItem';
import { fetchCoins } from '../../Redux/cryptoSlice';

function HomeList() {
  const [query, setQuery] = useState('');
  // eslint-disable-next-line
  function handleSearch(event) {
    setQuery(event.target.value);
  }

  const cryptos = useSelector((state) => state.crypto);

  const filteredCrypto = cryptos.filter((crypto) => (
    crypto.name.toLowerCase().includes(query.toLowerCase())
  ));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <ul className="itemList">
      {filteredCrypto.map((crypto) => <HomeItem key={crypto.id} crypto={crypto} />)}
    </ul>
  );
}

export default HomeList;
