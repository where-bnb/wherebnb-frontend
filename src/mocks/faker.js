import { fakerKO as faker } from "@faker-js/faker";

export const generateRoomList = (number) => {
  const roomList = [];

  while (number !== 0) {
    const room = {
      address: {
        country: faker.location.country(),
        state: faker.location.state(),
        city: faker.location.city(),
        street: faker.location.street(),
        details: faker.location.secondaryAddress(),
        zipcode: faker.location.zipCode(),
        latitude: faker.location.latitude(),
        longtitude: faker.location.longitude(),
      },
      searchUser: {
        userId: faker.string.uuid(),
        name: faker.person.fullName(),
        picture: faker.image.avatar(),
        explanation: faker.lorem.sentence(),
      },
      propertyId: faker.number.int({ min: 1, max: 30 }),
      photos: [
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
        faker.image.urlPicsumPhotos(),
      ],
      price: faker.commerce.price({
        min: 13000,
        max: 300000,
        dec: 0,
      }),
      totalScore: faker.number.float({ min: 0, max: 5, precision: 0.01 }),
      reviews: faker.number.int(1000),
      propertyExplanation: faker.lorem.sentence(),
      guestFavorite: faker.datatype.boolean({ probability: 0.4 }),
    };

    roomList.push(room);
    number--;
  }

  return roomList;
};
