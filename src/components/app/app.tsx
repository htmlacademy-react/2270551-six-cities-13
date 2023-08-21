import {HelmetProvider} from 'react-helmet-async';
import {Routes, Route} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus, RequestStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-data/selectors';
import {getOffers, getOffersFetchingStatus} from '../../store/offers-data/selectors';
import browserHistory from '../../browser-history';
import Loader from '../../pages/loading-page/loading-page';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer/offer';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/404/404';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-router/history-router';

function App(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const isAuthorizationStatus = useAppSelector(getAuthorizationStatus);
  const isOffersDataLoading = useAppSelector(getOffersFetchingStatus);

  if (isAuthorizationStatus === AuthorizationStatus.Unknown ||
      isOffersDataLoading === RequestStatus.Pending) {
    return (
      <Loader />
    );
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage />}
          />
          <Route path={AppRoute.Offer}>
            <Route
              path=':id'
              element={<OfferPage />}
            />
          </Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={isAuthorizationStatus}>
                <FavoritesPage offers={offers}/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
