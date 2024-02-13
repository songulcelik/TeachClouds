import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import NewAdminForm from "@/components/dashboard/admin/new-admin-form";
import React from "react";
import { wait } from "@/helpers/misc";

const NewAdminPage = async () => {
	await wait(5000);
	return (
		<>
			<PageHeader title="New Admin" />
			<Spacer height={50} />
			<NewAdminForm />
			<Spacer />
		</>
	);
};

export default NewAdminPage;
