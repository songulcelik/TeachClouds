"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import { config } from "@/helpers/config";
import LessonToolbar from "./lesson-toolbar";
import { TfiCheck, TfiMinus } from "react-icons/tfi";

const LessonList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <LessonToolbar row={row} />;
	};

	const handleCompulsory = (row) => {
		return row.compulsory ? <TfiCheck /> : <TfiMinus />;
	};

	return (
		<div className="container">
			<Link href="/dashboard/lesson/new" className="btn btn-primary mb-3">
				New
			</Link>
			<DataTable
				title="Lesson List"
				dataSource={content}
				dataKey="lessonId"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="Name" field="lessonName"/>
				<Column title="Credit" field="creditScore" />
				<Column title="Compulsory" template={handleCompulsory} />
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default LessonList;
