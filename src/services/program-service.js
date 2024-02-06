import { getAuthHeader } from "@/helpers/auth";
import { config } from "@/helpers/config";

const API_URL = config.api.baseUrl;

export const getAllProgramsByPage = async (
	page = 0,
	size = 20,
	sort = "day",
	type = "asc"
) => {
	const qs = `page=${page}&size=${size}&sort=${sort}&type=${type}`;

	return fetch(`${API_URL}/lessonPrograms/search?${qs}`, {
		headers: await getAuthHeader(),
	});
};

export const getAllPrograms = async () => {
	return fetch(`${API_URL}/lessonPrograms/getAll`, {
		headers: await getAuthHeader(),
	});
};

export const getAllProgramsByStudent = async () => {
	return fetch(`${API_URL}/lessonPrograms/getAllLessonProgramByStudent`, {
		headers: await getAuthHeader(),
	});
};

export const getAllProgramsByTeacher = async () => {
	return fetch(`${API_URL}/lessonPrograms/getAllLessonProgramByTeacher`, {
		headers: await getAuthHeader(),
	});
};

export const getAllAssignedPrograms = async () => {
	return fetch(`${API_URL}/lessonPrograms/getAllAssigned`, {
		headers: await getAuthHeader(),
	});
};

export const getAllUnAssignedPrograms = async () => {
	return fetch(`${API_URL}/lessonPrograms/getAllUnassigned`, {
		headers: await getAuthHeader(),
	});
};

export const getProgramById = async (id) => {
	return fetch(`${API_URL}/lessonPrograms/getById/${id}`, {
		headers: await getAuthHeader(),
	});
};

export const deleteProgram = async (id) => {
	return fetch(`${API_URL}/lessonPrograms/delete/${id}`, {
		method: "delete",
		headers: await getAuthHeader(),
	});
};

export const createProgram = async (payload) => {
	console.log(JSON.stringify(payload))
	return fetch(`${API_URL}/lessonPrograms/save`, {
		method: "post",
		headers: await getAuthHeader(),
		body: JSON.stringify(payload),
	});
};
