import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllMessagesByPage = async (
	page = 0,
	size = 20,
	sort = "date",
	type = "desc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/contactMessages/getAll?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const createMessage = (payload) => {
	return fetch(`${API_URL}/contactMessages/save`, {
		method: "post",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	});
};
