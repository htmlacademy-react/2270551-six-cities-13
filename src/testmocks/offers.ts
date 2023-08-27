/*import { address, name, random, datatype, commerce, system } from 'faker';
import { Offer, OffersConfig } from '../types/offer-types';

const ARRAY_LENGTH = 5;

const getRandomIndex = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const makeFakeOffers = (config?: OffersConfig): Offer[] => {
  const randomIndex = getRandomIndex(0, ARRAY_LENGTH);

  return new Array(ARRAY_LENGTH).fill(null).map((_item, index) =>
      ({
        id: config?.id && index === randomIndex ? config?.id : datatype.uuid(),
        title: name.title(),
        type: random.word(),
        price: +commerce.price(),
        city: {
          name: address.cityName(),
          location: {
            latitude: +address.latitude(),
            longitude: +address.longitude(),
            zoom: datatype.number(20),
          },
        },
        location: config?.location ?? {
          latitude: +address.latitude(),
          longitude: +address.longitude(),
          zoom: datatype.number(20),
        },
        isFavorite: config?.isFavorite ?? datatype.boolean(),
        isPremium: datatype.boolean(),
        rating: datatype.number(5),
        previewImage: system.filePath(),
      } as Card)
  );
};

export { makeFakeOffers };*/
