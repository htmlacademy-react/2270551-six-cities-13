import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state-types';
import { AxiosInstance } from 'axios';
import { Offer, OfferId, Offers } from '../types/offer-types';
import { APIRoute } from '../const';
import { UserData } from '../types/user-data-type';
import { saveToken } from '../services/token';
import { AuthData } from '../types/auth-data-type';
import { dropToken } from '../services/token';
import { NewReview, Reviews } from '../types/review-types';

export const fetchOffersAction = createAsyncThunk<
  Offers,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchOffers', async (_arg, { extra: api }) => {
  const { data } = await api.get<Offers>(APIRoute.Offers);
  return data;
});

export const fetchOfferAction = createAsyncThunk<
  Offer,
  OfferId,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchOffer', async ({ id }, { extra: api }) => {
  const { data } = await api.get<Offer>(`${APIRoute.Offers}/${id}`);
  return data;
});

export const fetchNearOffersAction = createAsyncThunk<
  Offers,
  OfferId,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('data/fetchNearOffers', async ({ id }, { extra: api }) => {
  const { data } = await api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`);
  return data;
});

export const fetchReviewsAction = createAsyncThunk<
  Reviews,
  OfferId,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('comment/fetchReviews', async ({ id }, { extra: api }) => {
  const { data } = await api.get<Reviews>(`${APIRoute.Comments}/${id}`);
  return data;
});

export const sendReviewAction = createAsyncThunk<
  Reviews,
  NewReview,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'comment/sendReview',
  async ({ hotelId, comment, rating }, { extra: api }) => {
    const { data } = await api.post<Reviews>(
      `${APIRoute.Comments}/${hotelId}`,
      { comment, rating }
    );
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<
  UserData,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/checkAuth', async (_arg, { extra: api }) => {
  const { data: userData } = await api.get<UserData>(APIRoute.Login);
  return userData;
});

export const loginAction = createAsyncThunk<
  UserData,
  AuthData,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>(
  'user/login',
  async ({ login: email, password }, { extra: api }) => {
    const { data: userData } = await api.post<UserData>(APIRoute.Login, {
      email,
      password,
    });
    saveToken(userData.token);
    return userData;
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { dispatch: AppDispatch; state: State; extra: AxiosInstance }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
