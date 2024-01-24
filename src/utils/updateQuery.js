import {
  useDateFilter,
  useDetailFilter,
  useGuestFilter,
  useSearchKey,
} from "@/hooks/useSearchFilter";
import dayjs from "dayjs";
import qs from "query-string";

export const updateQuery = (pathname, params) => {
  const { place } = useSearchKey.getState();
  const { checkin, checkout } = useDateFilter.getState();
  const { guests } = useGuestFilter.getState();
  const { adults, children, infants, pets } = guests;
  const {
    price_min,
    price_max,
    min_bedrooms,
    min_beds,
    min_bathrooms,
    guest_favorite,
    property_type,
    amenities,
  } = useDetailFilter.getState();

  let currentQuery = {};

  if (params) {
    currentQuery = qs.parse(params.toString());
  }

  let updatedQuery;

  updatedQuery = {
    ...currentQuery,
    place: place,
    checkin: checkin,
    checkout: checkout,
    adults: adults,
    children: children,
    infants: infants,
    pets: pets,
    price_min: price_min,
    price_max: price_max,
    min_bedrooms: min_bedrooms,
    min_beds: min_beds,
    min_bathrooms: min_bathrooms,
    guest_favorite: guest_favorite,
    property_type: property_type,
    amenities: amenities,
  };

  if (updateQuery.place === "") {
    delete updateQuery.place;
  }
  if (updateQuery.checkin) {
    updatedQuery.checkin = dayjs().format("YYYY-MM-DD");
  }
  if (updateQuery.checkout) {
    updatedQuery.checkout = dayjs().add(1, "week").format("YYYY-MM-DD");
  }
  if (updatedQuery.adults === 0) {
    delete updatedQuery.adults;
  }
  if (updatedQuery.children === 0) {
    delete updatedQuery.children;
  }
  if (updatedQuery.infants === 0) {
    delete updatedQuery.infants;
  }
  if (updatedQuery.pets === 0) {
    delete updatedQuery.pets;
  }
  if (updatedQuery.price_min === 0) {
    delete updatedQuery.price_min;
  }
  if (updatedQuery.price_max === 0) {
    delete updatedQuery.price_max;
  }
  if (updatedQuery.min_bedrooms === 0) {
    delete updatedQuery.min_bedrooms;
  }
  if (updatedQuery.min_beds === 0) {
    delete updatedQuery.min_beds;
  }
  if (updatedQuery.min_bathrooms === 0) {
    delete updatedQuery.min_bathrooms;
  }
  if (updatedQuery.guest_favorite === false) {
    delete updatedQuery.guest_favorite;
  }
  if (updatedQuery.property_type === null) {
    delete updatedQuery.property_type;
  }
  if (updatedQuery.amenities === null) {
    delete updatedQuery.amenities;
  }

  const url = qs.stringifyUrl({
    url: pathname,
    query: updatedQuery,
  });

  return url;
};
