import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import TermList from "@/components/dashboard/term/term-list";
import { getAllTermsByPage } from "@/services/term-service";
import React from "react";

const TermPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllTermsByPage(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Term" />
			<Spacer height={50} />
			<TermList data={data} />
			<Spacer />
		</>
	);
};

export default TermPage;
