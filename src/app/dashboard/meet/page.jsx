import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/misc/spacer";
import React from "react";
import { getAllMeetsByPageForTeacher } from "@/services/meet-service";
import MeetList from "@/components/dashboard/meet/meet-list";

const MeetsPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const res = await getAllMeetsByPageForTeacher(page);
	const data = await res.json();
	if (!res.ok) throw new Error(data.message);

	return (
		<>
			<PageHeader title="Meet" />
			<Spacer height={50} />
            <MeetList data={data}/>
			<Spacer />
		</>
	);
};

export default MeetsPage;
