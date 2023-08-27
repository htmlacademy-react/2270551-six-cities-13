/*import { NameSpace, Status, AuthorizationStatus } from '../../const';
import { makeFakeUser } from '../../testmocks/user';
import { State } from '../types/state-types';
import { getAuthorizationStatus, getUser } from './user-data.selectors';

describe('UserProcess selectors', () => {
  const state = {
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: makeFakeUser(),
      statusLogin: Status.Idle,
    },
  };

  it('should return authorization status from state', () => {
    const { authorizationStatus } = state[NameSpace.User];
    const result = getAuthorizationStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return user data from state', () => {
    const { user } = state[NameSpace.User];
    const result = getUser(state);
    expect(result).toBe(user);
  });
});*/
