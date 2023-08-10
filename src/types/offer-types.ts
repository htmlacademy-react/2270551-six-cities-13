type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

export type Offers = Offer[];

/*export type Offer = {
  bedrooms: number;
  city: {
    location: Location;
    name: string;
  };
  description: string;
  goods: string[];
  id: number;
  images: string[];
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}; */

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: string;
  location: Location;
}

/*export type OfferId = {
  id: number;
};*/

/*export type LocationMap = {
  id: string;
  location: Location;
};*/

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type DetailedOffer = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}
