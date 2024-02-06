import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import ProgramList from "@/components/dashboard/program/program-list";
import UnAssignedProgramList from "@/components/dashboard/program/unassigned-program-list";
import {
	getAllProgramsByPage,
	getAllUnAssignedPrograms,
} from "@/services/program-service";
import { getAllTeachers } from "@/services/teacher-service";
import React from "react";

const ProgramPage = async ({ searchParams }) => {
	const { page } = searchParams;

	const dataAllPrograms = (await getAllProgramsByPage(page)).json();
	const dataUnAssignedPrograms = (await getAllUnAssignedPrograms()).json();
	const dataTeachers = (await getAllTeachers()).json();

	const [allPrograms, unAssignedPrograms, teachers] = await Promise.all([
		dataAllPrograms,
		dataUnAssignedPrograms,
		dataTeachers,
	]);

	return (
		<>
			<PageHeader title="Program" />
			<Spacer height={50} />
			<ProgramList data={allPrograms} />
			<Spacer />
			<UnAssignedProgramList
				programs={unAssignedPrograms}
				teachers={teachers}
			/>
			<Spacer />
		</>
	);
};

export default ProgramPage;
