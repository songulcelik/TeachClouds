"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import StudentToolbar from "./student-toolbar";

const StudentList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <StudentToolbar row={row} />;
	};

	return (
		<div className="container">
			<Link
				href="/dashboard/student/new"
				className="btn btn-primary mb-3"
			>
				New
			</Link>
			<DataTable
				title="Student List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="First Name" field="name" />
				<Column title="Last Name" field="surname" />
				<Column title="Username" field="username" />
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default StudentList;
