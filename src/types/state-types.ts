import { AxiosInstance } from 'axios';
import {store} from '../store';
import { AuthorizationStatus, CITIES, SORT_ITEMS } from '../const';


export type CityNames = (typeof CITIES)[number];
export type SortNames = (typeof SORT_ITEMS)[number];
export type Token = string;

type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type AxiosData = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type City = {
  name: string;
  location: Location;
};

export type AuthorizationStatuses =
  (typeof AuthorizationStatus)[keyof typeof AuthorizationStatus];
export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type Card = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
};

export type Review = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type OfferCard = {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
} & Card;


export type AppProcess = {
  offers: Card[];
  activeOffer: OfferCard | null;
  offersNearby: OfferCard[];
  offerReviews: Review[];
  isOffersLoading: boolean;
  authorizationStatus: AuthorizationStatuses;
  user: string | null;
  activeCity: CityNames;
  activeSort: SortNames;
  error: string | null;
};
