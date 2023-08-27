import { AuthorizationStatus, Status } from '../../const';
import { makeFakeUser } from '../../testmocks/user';
import { checkAuthAction, loginAction, logoutAction } from '../api-action';
import { userData } from './user-data.slice';

vi.mock('../root-reducer', () => ({ rootReducer: vi.fn() }));

describe('UserProcess Slice', () => {
  const mockUser = makeFakeUser();

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      statusLogin: Status.Success,
    };
    const result = userData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null,
      statusLogin: Status.Idle,
    };

    const result = userData.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('If successful authorization, the authorization status should change to "Auth" and the object with user data should be loaded with checkAuthAction.fulfilled', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser,
      statusLogin: Status.Idle,
    };

    const result = userData.reducer(
      undefined,
      checkAuthAction.fulfilled(mockUser, '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('If case of unsuccessful authorization, the authorization status should change to "NoAuth" witch checkAuthAction.rejected', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      statusLogin: Status.Idle,
    };

    const result = userData.reducer(undefined, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('At the time of sending the request, the Login status should be changed to "Status.Loading" witch loginAction.pending', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null,
      statusLogin: Status.Loading,
    };

    const result = userData.reducer(undefined, loginAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('At successful authorization, the following should change: "statusLogin: Status.Success", "authorizationStatus: Auth" and load an array with user data witch loginAction.fulfilled', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: mockUser,
      statusLogin: Status.Success,
    };

    const result = userData.reducer(
      undefined,
      loginAction.fulfilled(mockUser, '', {
        login: 'user@email.ru',
        password: 'par0l',
      })
    );

    expect(result).toEqual(expectedState);
  });

  it('At case of unsuccessful authorization, the following should change: "statusLogin: Status.Error", "authorizationStatus: NoAuth" witch loginAction.rejected', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      statusLogin: Status.Error,
    };

    const result = userData.reducer(undefined, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('At case of unsuccessful exit from the personal account, the "authorizationStatus: NoAuth" should change and the array with user data should be deleted witch logoutAction.fulfilled', () => {
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
      statusLogin: Status.Idle,
    };

    const result = userData.reducer(undefined, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
