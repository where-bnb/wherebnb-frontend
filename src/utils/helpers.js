import moment from "moment";
import "moment/locale/ko"; // 한국어 지원 추가

moment.locale("ko"); // 한국어로 설정

export const calculateDaysOfStay = (checkInDate, checkOutDate) => {
  const startDate = moment(checkInDate);
  const endDate = moment(checkOutDate);

  return endDate.diff(startDate, "days") + 1;
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
