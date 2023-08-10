/*Константы*/
import {City} from './types/offer-types';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
}

export enum APIRoute{
  Login = '/login',
  Logout = '/logout',
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf ='Dusseldorf',
}

export const CityMap: Record<CityName, City> = {
  [CityName.Paris]: {
    name: CityName.Paris,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  [CityName.Cologne]: {
    name: CityName.Cologne,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  [CityName.Brussels]: {
    name: CityName.Brussels,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  [CityName.Amsterdam]: {
    name: CityName.Amsterdam,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  [CityName.Hamburg]: {
    name: CityName.Hamburg,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  [CityName.Dusseldorf]: {
    name: CityName.Dusseldorf,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  },
} as const;

export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

/*import { PointExpression } from 'leaflet';

const BACKEND_URL = 'https://13.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;
const AUTH_TOKEN_KEY_NAME = 'six-cities-token';
const ONE_STAR_RATIO = 20;
const MAX_OFFER_IMAGES = 6;
const MAX_OFFERS_NEARBY = 3;
const MAX_REVIEWS = 10;
const TIMEOUT_SHOW_ERROR = 2000;
const URL_PIN_DEFAULT = 'img/pin.svg';
const URL_PIN_CURRENT = 'img/pin-active.svg';
const ICON_SIZE = [27, 39] as PointExpression;
const DATE = 'YYYY-MM-DD';
const MONTH_TEXT = 'MMMM';
const TILE_LAYER =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const COPYRIGHT =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
const REGEX_EMAIL =
  /^[a-z0-9-]+(?:\.[a-z0-9-]+)*@(?:[a-z0-9](?:[a-z-]*[a-z])?\.)+[a-z]{2,4}$/;
const REGEX_PASSWORD = /\d+[a-zA-Z]+|[a-zA-Z]+\d+/;


enum AppRoute {
  Main = '/',
  Login = '/login',
  Offer = '/offer',
  Favorites = '/favorites',
  NotFound = '/404'
}

const APIRoute = {
  Offers: '/offers',
  Login: '/login',
  Logout: '/logout',
  Nearby: '/nearby',
  Comments: '/comments',
} as const;

const SORT_ITEMS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

const RATINGS = [
  { star: 5, title: 'perfect' },
  { star: 4, title: 'good' },
  { star: 3, title: 'not bad' },
  { star: 2, title: 'badly' },
  { star: 1, title: 'terribly' },
] as const;

const AUTH_FIELDS = [
  { name: 'email', label: 'E-mail' },
  { name: 'password', label: 'Password' },
] as const;

const URL_MARKER_DEFAULT = '../img/pin.svg';

const URL_MARKER_CURRENT = '../img/pin-active.svg';

export {AppRoute,
  AuthorizationStatus,
  CITIES,
  SORT_ITEMS,
  AUTH_FIELDS,
  BACKEND_URL,
  REQUEST_TIMEOUT,
  ICON_SIZE,
  MAX_REVIEWS,
  ONE_STAR_RATIO,
  MONTH_TEXT,
  REGEX_EMAIL,
  MAX_OFFER_IMAGES,
  MAX_OFFERS_NEARBY,
  TIMEOUT_SHOW_ERROR,
  REGEX_PASSWORD,
  URL_PIN_DEFAULT,
  URL_PIN_CURRENT,
  APIRoute,
  TILE_LAYER,
  COPYRIGHT,
  DATE,
  AUTH_TOKEN_KEY_NAME,
  RATINGS,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT};*/
