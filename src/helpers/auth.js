import { auth } from "@/auth";
import { config } from "./config";

export const getAuthHeader = async () => {
	const session = await auth();
	const token = session?.accessToken;

	let authHeader = { "Content-Type": "application/json" };
	if (token) {
		authHeader = { Authorization: `Bearer ${token}`, ...authHeader };
	}

	return authHeader;
};

export const isUserAuthorized = (role, url) => {
	const menu = config.userRightsOnRoutes.find((item) =>
		item.urlRegex.test(url)
	);

	if (!menu) return false;
	return menu.rights.includes(role);
};

export const parseJwt = (token) => {
	// token.split(".")[1] -> token 3 parcadan olusur. 2. parcada data bulunur
	// atob -> base64 olarak sifrelenmis stringleri cozer
	return JSON.parse(atob(token.split(".")[1]))
}


export const getIsTokenValid = (token) => {
	if(!token) return false;

	const jwtExpireTimeStamp = parseJwt(token).exp;
	// JWT token larin exp degeri saniye cinsinden olur

	const jwtExpireDateTime = new Date(jwtExpireTimeStamp * 1000);
	// new Date kendisine verilen milisaniye cinsinden degeri 1 Ocak 1970 tarihine ekleyerek yeni bir tarih saat elde eder

	if(jwtExpireDateTime <= new Date()){
		console.log('API token was expired')
		return false
	}

	return true;


}
