import moment from "moment";
import "moment/locale/ko"; // 한국어 지원 추가

moment.locale("ko"); // 한국어로 설정

export const calculateDaysOfStay = (checkInDate, checkOutDate) => {
  const startDate = moment(checkInDate);
  const endDate = moment(checkOutDate);

  return endDate.diff(startDate, "days");
};

export const fromNow = (dateString) => {
  return moment(dateString).fromNow();
};

export const translatePropertyDetails = (propertyDetails) => {
  const detailLabels = {
    bedroom: "침실",
    bed: "침대",
    bathroom: "욕실",
  };

  const translatedDetails = {};

  for (const key in propertyDetails) {
    if (propertyDetails.hasOwnProperty(key)) {
      const label = detailLabels[key];
      const value = propertyDetails[key];
      translatedDetails[label] = `${value}개`;
    }
  }

  return translatedDetails;
};

function clearNumber(value = "") {
  return value.replace(/\D+/g, "");
}

export function formatCreditCardNumber(value) {
  if (!value) {
    return value;
  }

  const clearValue = clearNumber(value);
  const nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
    4,
    8,
  )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`;

  return nextValue.trim();
}

export function formatCVC(value) {
  const clearValue = clearNumber(value);
  const maxLength = 3;
  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}

export function formatFormData(data) {
  return Object.keys(data).map((d) => `${d}: ${data[d]}`);
}
