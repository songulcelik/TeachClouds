"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import MeetToolbar from "./meet-toolbar";
import { formatDateLL, formatTimeLT } from "@/helpers/date-time";

const MeetList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <MeetToolbar row={row} />;
	};

	const handleTime = (row) =>
		`${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;

	const handleDate = (row) => formatDateLL(row.date);

	const handleStudents = (row) => {
		return row.students
			.map((item) => `${item.name} ${item.surname}`)
			.join("-");
	};

	return (
		<div className="container">
			<Link href="/dashboard/meet/new" className="btn btn-primary mb-3">
				New
			</Link>
			<DataTable
				title="Meet List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="Date" template={handleDate} />
				<Column title="Start - End" template={handleTime} />
				<Column title="Students" template={handleStudents} />
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default MeetList;
