import { create } from "zustand";

// SearchBar - 여행자 정보 (게스트 인원)
export const useGuestFilter = create((set) => ({
  guests: {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  },
  increaseAdults: () =>
    set((state) => ({
      guests: { ...state.guests, adults: state.guests.adults + 1 },
    })),
  decreaseAdults: () =>
    set((state) => ({
      guests: { ...state.guests, adults: state.guests.adults - 1 },
    })),
  increaseChildren: () =>
    set((state) => ({
      guests: { ...state.guests, children: state.guests.children + 1 },
    })),
  decreaseChildren: () =>
    set((state) => ({
      guests: { ...state.guests, children: state.guests.children - 1 },
    })),
  increaseInfants: () =>
    set((state) => ({
      guests: { ...state.guests, infants: state.guests.infants + 1 },
    })),
  decreaseInfants: () =>
    set((state) => ({
      guests: { ...state.guests, infants: state.guests.infants - 1 },
    })),
  increasePets: () =>
    set((state) => ({
      guests: { ...state.guests, pets: state.guests.pets + 1 },
    })),
  decreasePets: () =>
    set((state) => ({
      guests: { ...state.guests, pets: state.guests.pets - 1 },
    })),
  resetAll: () =>
    set({
      guests: {
        adults: 0,
        children: 0,
        infants: 0,
        pets: 0,
      },
    }),
}));

// Filter Modal (세부 필터)
export const useDetailFilter = create((set) => ({
  price_min: 0,
  price_max: 0,
  min_bedrooms: 0,
  min_beds: 0,
  min_bathrooms: 0,
  guest_favorite: false,
  property_type: [],
  amenities: [],

  setMinPrice: (value) => set({ price_min: value }),
  setMaxPrice: (value) => set({ price_max: value }),
  setMinBedrooms: (value) => set({ min_bedrooms: value }),
  setMinBeds: (value) => set({ min_beds: value }),
  setMinBathrooms: (value) => set({ min_bathrooms: value }),
  setGuestFavorite: () =>
    set((state) => ({ guest_favorite: !state.guest_favorite })),
  addPropertyType: (value) =>
    set((state) => ({ property_type: [...state.property_type, value] })),
  removePropertyType: (value) =>
    set((state) => {
      let newList = state.property_type.filter((item) => item !== value);

      return { property_type: newList };
    }),
  addAmenities: (value) =>
    set((state) => ({ amenities: [...state.amenities, value] })),
  removeAmenities: (value) =>
    set((state) => {
      let newList = state.amenities.filter((item) => item !== value);
      return { amenities: newList };
    }),
  removeAll: () => {
    set({
      price_min: 0,
      price_max: 0,
      min_bedrooms: 0,
      min_beds: 0,
      min_bathrooms: 0,
      guest_favorite: false,
      property_type: [],
      amenities: [],
    });
  },
}));
