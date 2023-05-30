import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import HomeList from '../components/Home/homeList';
import { fetchCoins } from '../Redux/cryptoSlice';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('../Redux/cryptoSlice', () => ({
  fetchCoins: jest.fn(),
}));

describe('HomeList', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    fetchCoins.mockClear();
  });

  it('renders correctly with filtered crypto data', () => {
    const cryptoData = [
      { id: '1', name: 'Bitcoin', symbol: 'BTC' },
      { id: '2', name: 'Ethereum', symbol: 'ETH' },
    ];

    useSelector.mockReturnValue(cryptoData);
    useDispatch.mockReturnValue(jest.fn());

    render(
      <MemoryRouter>
        <HomeList />
      </MemoryRouter>
    );

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
  });

  it('dispatches fetchCoins action on mount', () => {
    useSelector.mockReturnValue([]);
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    render(
      <MemoryRouter>
        <HomeList />
      </MemoryRouter>
    );

    expect(mockDispatch).toHaveBeenCalledWith(fetchCoins());
  });
});
