/*Компонент для отрисовки главной страницы*/

import {useEffect} from 'react';
import {HelmetProvider} from 'react-helmet-async';
import {Routes, Route} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {checkAuthAction, fetchFavoritesAction} from '../../store/api-action';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user-data/user-data.selectors';
import MainPage from '../../pages/main/main';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer/offer';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/404/404';
import PrivateRoute from '../private-route/private-route';
import HistoryRouter from '../history-router/history-router';
import browserHistory from '../../browser-history';
import LoadingPage from '../../pages/loading-page/loading-page';

function App(): JSX.Element {
  //const isAuthorizationStatus = useAppSelector(getAuthorizationStatus);
  //store.dispatch(checkAuthAction());
  const dispatch = useAppDispatch();

  const isAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(checkAuthAction());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }
  }, [dispatch, isAuthorizationStatus]);

  if (isAuthorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingPage />;
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage/>}
          />
          <Route
            path={AppRoute.Login}
            element={<LoginPage/>}
          />
          <Route path={AppRoute.Offer}>
            <Route
              path=':id'
              element={<OfferPage/>}
            />
          </Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute authorizationStatus={isAuthorizationStatus}>
                <FavoritesPage/>
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={<NotFoundPage/>}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
