import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fetchCoins } from '../Redux/cryptoSlice';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('fetchCoins', () => {
  it('should dispatch the correct actions when fetching coins succeeds', async () => {
    const expectedPayload = [
      {
        id: '1',
        img: 'coin1.png',
        name: 'Coin 1',
        price: 100,
        rank: 1,
        symbol: 'C1',
        marketCap: 100000,
        availableSupply: 1000,
        contractAddress: '0x123456789',
        decimals: 18,
        priceBtc: 0.001,
        priceChange1d: 10,
        priceChange1h: 2,
        priceChange1w: 20,
        totalSupply: 2000,
        volume: 1000,
        show: false,
      },
    ];
    const mockResponse = { json: jest.fn().mockResolvedValue({ coins: expectedPayload }) };
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const store = mockStore({});
    await store.dispatch(fetchCoins());

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('crypto/fetchCoins/pending');
    expect(actions[1].type).toEqual('crypto/fetchCoins/fulfilled');

    fetchMock.mockRestore();
  });

  it('should dispatch the correct actions when fetching coins fails', async () => {
    const mockResponse = { json: jest.fn().mockRejectedValue(new Error('Fetch error')) };
    const fetchMock = jest.spyOn(global, 'fetch').mockResolvedValue(mockResponse);

    const store = mockStore({});
    await store.dispatch(fetchCoins());

    const actions = store.getActions();
    expect(actions).toHaveLength(2);
    expect(actions[0].type).toEqual('crypto/fetchCoins/pending');
    expect(actions[1].type).toEqual('crypto/fetchCoins/rejected');
    expect(actions[1].error.message).toEqual('Fetch error');

    fetchMock.mockRestore();
  });
});
