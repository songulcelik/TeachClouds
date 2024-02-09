import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllTeachersByPage = async (
	page = 0,
	size = 20,
	sort = "name",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/teachers/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllTeachers = async () => {
	return fetch(`${API_URL}/teachers/getAll`, {
		headers: await getAuthHeader(),
	});
};

export const getAllAdvisorTeachers = async () => {
	return fetch(`${API_URL}/advisorTeacher/getAll`, {
		headers: await getAuthHeader(),
	});
};

export const getTeacherById = async (id) => {
	return fetch(`${API_URL}/teachers/getSavedTeacherById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteTeacher = async (id) => {
	return fetch(`${API_URL}/teachers/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createTeacher = async (payload) => {
	return fetch(`${API_URL}/teachers/save`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

export const updateTeacher = async (payload) => {
	return fetch(`${API_URL}/teachers/update/${payload.userId}`, {
		method: "put",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};


export const assignProgramToTeacher = async (payload) => {
	return fetch(`${API_URL}/teachers/chooseLesson`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload)
	});
};

