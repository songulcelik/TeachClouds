import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import ContactMessageList from "@/components/dashboard/contact-message/contact-message-list";
import { getAllMessagesByPage } from "@/services/contact-service";
import React from "react";

const ContactMessagePage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllMessagesByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	data.content = data.content.map((item, index) => ({ ...item, id: index }));

	return (
		<>
			<PageHeader title="Messages" />
			<Spacer height={50} />
			<ContactMessageList data={data} />
			<Spacer />
		</>
	);
};

export default ContactMessagePage;
