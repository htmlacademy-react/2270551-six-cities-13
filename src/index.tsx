import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {city} from './mocks/city';
import {reviews} from './mocks/reviews';
import {detailedOffers} from './mocks/offers';
import {store} from './store';
import { fetchOffersAction, checkAuthAction } from './store/api-action';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './browser-history';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <App
          city={city}
          detailedOffers={detailedOffers}
          reviews={reviews}
        />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
