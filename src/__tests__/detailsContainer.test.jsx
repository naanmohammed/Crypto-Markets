import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DetailsContainer from '../components/Description/DetailsContainer';
import '@testing-library/jest-dom/extend-expect';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('DetailsContainer', () => {
  beforeEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    useParams.mockClear();
  });

  it('renders correctly with filtered crypto data', () => {
    const mockDispatch = jest.fn();
    const cryptoData = [
      {
        id: '1',
        name: 'Bitcoin',
        symbol: 'BTC',
        price: 50000,
        img: 'bitcoin.png',
        rank: 1,
        show: true,
      },
    ];

    useSelector.mockReturnValue(cryptoData);
    useDispatch.mockReturnValue(mockDispatch);
    useParams.mockReturnValue({ id: '1' });

    render(<DetailsContainer />);

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(mockDispatch).toHaveBeenCalledTimes(1);
  });
});
