import {Link} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const';
import {logoutAction} from '../../store/api-action';
import {getFavorites} from '../../store/favorites-data/favorites-data.selectors';
import {getUser, getAuthorizationStatus} from '../../store/user-data/user-data.selectors';

function HeaderRight(): JSX.Element {
  const user = useAppSelector(getUser);
  const favorites = useAppSelector(getFavorites);
  const isAuthorizationStatus = useAppSelector(getAuthorizationStatus);

  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {isAuthorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__user-name user__name">{user?.email}</span>
                <span className="header__favorite-count">{favorites.length}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link" to="#"
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </> :
          <li className="header__nav-item header__nav-link--profile">
            <Link className="header__nav-link" to={AppRoute.Login}>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default HeaderRight;
