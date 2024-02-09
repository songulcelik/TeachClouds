"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import StudentInfoToolbar from "./student-info-toolbar";

const StudentInfoList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <StudentInfoToolbar row={row} />;
	};

	const handleFullName = (row) => {
		const { name, surname } = row.studentResponse;

		return `${name} ${surname}`;
	};

	return (
		<div className="container">
			<Link
				href="/dashboard/student-info/new"
				className="btn btn-primary mb-3"
			>
				New
			</Link>
			<DataTable
				title="Info List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="Student" template={handleFullName} />
				<Column title="Lesson" field="lessonName" />
				<Column title="Absentee" field="absentee" />
				<Column title="Midterm" field="midtermExam" />
				<Column title="Final" field="finalExam" />
				<Column title="Note" field="note" />
				<Column title="Average" field="average" />
				<Column title="Info" field="infoNote" />
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default StudentInfoList;
