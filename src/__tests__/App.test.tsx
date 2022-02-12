import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import App from '../renderer/App';

describe('App', () => {
  const initialState = {
    intelligence: 0.1,
    personality: 0.1,
    charm: 0.1,
    willingness: 0.1,
    luck: 0.1,
    sex: 0.1,
    knowledge: 0.1,
    happiness: 0.1,
    credit: 0.1,
  };
  const mockStore = configureStore();

  let store;
  it('should render', () => {
    store = mockStore(initialState);
    expect(
      render(
        <Provider store={store}>
          <App />
        </Provider>
      )
    ).toBeTruthy();
  });
});
