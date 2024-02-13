"use client";
import { chooseLessonAction } from "@/actions/student-actions";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import SubmitButton from "@/components/common/form-fields/submit-button";
import Spacer from "@/components/common/misc/spacer";
import { formatTimeLT } from "@/helpers/date-time";
import { initialResponse } from "@/helpers/form-validation";
import { useFormState } from "react-dom";

const AllProgramProgramList = ({ allPrograms }) => {
	const [state, dispatch] = useFormState(chooseLessonAction, initialResponse);

	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	const handleTeacherNames = (row) => {
		return row.teachers.map((item) => item.name).join("-");
	};

	const handleTime = (row) =>
		`${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;

	return (
		<div className="container">
			{state?.message ? (
				<div className="alert alert-danger">{state.message}</div>
			) : null}

			<form action={dispatch} noValidate>
				<DataTable
					id="lessonProgramId"
					title="All Programs"
					dataSource={allPrograms}
					dataKey="lessonProgramId"
					selectionMode="multiple"
					error={state?.errors?.lessonProgramId}
				>
					<Column index={true} title="#" />
					<Column title="Lessons" template={handleLessonNames} />
					<Column title="Teachers" template={handleTeacherNames} />
					<Column title="Day" field="day" />
					<Column title="Start-End" template={handleTime} />
				</DataTable>
				<Spacer height={15} />

				<div className="text-center">
					<SubmitButton title="Choose" />
				</div>
			</form>
		</div>
	);
};

export default AllProgramProgramList;
