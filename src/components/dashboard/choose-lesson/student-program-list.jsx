"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { formatTimeLT } from "@/helpers/date-time";

const StudentProgramList = ({ studentPrograms }) => {
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
			<DataTable
				id="lessonProgramId"
				title="Student Programs"
				dataSource={studentPrograms}
				dataKey="lessonProgramId"
			>
				<Column index={true} title="#" />
				<Column title="Lessons" template={handleLessonNames} />
				<Column title="Teachers" template={handleTeacherNames} />
				<Column title="Day" field="day" />
				<Column title="Start-End" template={handleTime} />
			</DataTable>
		</div>
	);
};

export default StudentProgramList;
