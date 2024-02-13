"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import ProgramToolbar from "./program-toolbar";
import { formatTimeLT } from "@/helpers/date-time";

const ProgramList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <ProgramToolbar row={row} />;
	};

	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	const handleTime = (row) =>
		`${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;


	return (
		<div className="container">
			<Link
				href="/dashboard/program/new"
				className="btn btn-primary mb-3"
			>
				New
			</Link>
			<DataTable
				title="All Programs"
				dataSource={content}
				dataKey="lessonProgramId"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="Lessons" template={handleLessonNames} />
				<Column title="Day" field="day" />
				<Column title="Start/End" template={handleTime} />
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default ProgramList;
