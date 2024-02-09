import Spacer from "@/components/common/misc/spacer";
import UnAuthorized from "@/components/errors/unauthorized";
import React from "react";

const UnauthorizedPage = () => {
	return (
		<>
			<Spacer />
			<UnAuthorized />
			<Spacer />
		</>
	);
};

export default UnauthorizedPage;
