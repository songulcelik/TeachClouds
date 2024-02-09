import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllStudentsByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/students/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllStudents = async () => {
	return fetch(`${API_URL}/students/getAll`, {
		headers: await getAuthHeader(),
	});
};

export const getAllStudentsForAdvisor = async () => {
	return fetch(`${API_URL}/students/getAllByAdvisor`, {
		headers: await getAuthHeader(),
	});
};

export const getStudentById = async (id) => {
	return fetch(`${API_URL}/students/getStudentById?id=${id}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteStudent = async (id) => {
	return fetch(`${API_URL}/students/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createStudent = async (payload) => {
	return fetch(`${API_URL}/students/save`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

export const updateStudent = async (payload) => {
	return fetch(`${API_URL}/students/update/${payload.id}`, {
		method: "put",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

export const chooseLesson = async (payload) => {
	return fetch(`${API_URL}/students/chooseLesson`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

