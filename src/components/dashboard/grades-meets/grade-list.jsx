"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";

const GradeList = ({ grades }) => {
	const { content, totalPages, number, size } = grades;

	return (
		<div className="container">
			<DataTable
				id="grade"
				title="Grades"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="Lesson" field="lessonName" />
				<Column title="Absentee" field="absentee" />
				<Column title="Midterm" field="midtermExam" />
				<Column title="Final" field="finalExam" />
				<Column title="Note" field="note" />
				<Column title="Info" field="infoNote" />
				<Column title="Average" field="average" />
			</DataTable>
		</div>
	);
};

export default GradeList;
