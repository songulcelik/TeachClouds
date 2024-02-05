import PageHeader from "@/components/common/page-header";
import Spacer from "@/components/common/spacer";
import NewProgramForm from "@/components/dashboard/program/new-program-form";
import { getAllLessons } from "@/services/lesson-service";
import { getAllTerms } from "@/services/term-service";
import React from "react";

const NewProgramPage = async () => {
	const dataTerm = (await getAllTerms()).json();
	const dataLesson = (await getAllLessons()).json();

	const [terms, lessons] = await Promise.all([dataTerm, dataLesson]);

	const sortedTerms = terms.sort(
		(a, b) => new Date(a.startDate) - new Date(b.startDate)
	);

	// error handling olmali

	return (
		<>
			<PageHeader title="New Program" />
			<Spacer height={50} />
			<NewProgramForm terms={sortedTerms} lessons={lessons} />
			<Spacer />
		</>
	);
};

export default NewProgramPage;
