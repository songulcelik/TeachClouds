import { config } from "./config";
import { formatDateYYYYMMM } from "./date-time";

export const getEducationTermValues = () =>
	config.educationTerms.map((item) => item.value);

export const getGenderValues = () => config.genders.map((item) => item.value);

export const getDayValues = () => config.days.map((item) => item.value);

export const getTermTitle = (item) => {
	const termItem = config.educationTerms.find(
		(term) => term.value === item.term
	);

	const time = formatDateYYYYMMM(item.startDate);

	return `${termItem.label} ${time}`;
};
