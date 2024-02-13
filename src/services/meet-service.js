import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllMeetsByPageForTeacher = async (
	page = 0,
	size = 20,
	sort = "date",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/meet/getAllMeetByAdvisorAsPage?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllMeetsForStudent = async () => {
	return fetch(`${API_URL}/meet/getAllMeetByStudent`, {
		headers: await getAuthHeader(),
	});
};

export const getMeetById = async (id) => {
	return fetch(`${API_URL}/meet/getMeetById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteMeet = async (id) => {
	return fetch(`${API_URL}/meet/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createMeet = async (payload) => {
	return fetch(`${API_URL}/meet/save`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

export const updateMeet = async (payload) => {
	return fetch(`${API_URL}/meet/update/${payload.id}`, {
		method: "put",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};
