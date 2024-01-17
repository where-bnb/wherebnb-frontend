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
}));
