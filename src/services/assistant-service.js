import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllAssistantsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/vicedean/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAssistantById = async (id) => {
	return fetch(`${API_URL}/vicedean/getViceDeanById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteAssistant = async (id) => {
	return fetch(`${API_URL}/vicedean/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createAssistant = async (payload) => {
	return fetch(`${API_URL}/vicedean/save`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

export const updateAssistant = async (payload) => {
	return fetch(`${API_URL}/vicedean/update/${payload.userId}`, {
		method: "put",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};
