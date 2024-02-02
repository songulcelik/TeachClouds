import { config } from "./config";

export const getEducationTermValues = () =>
	config.educationTerms.map((item) => item.value);

export const getGenderValues = () =>
	config.genders.map((item) => item.value);
