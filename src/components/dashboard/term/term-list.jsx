"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";
import TermToolbar from "./term-toolbar";
import { config } from "@/helpers/config";

const TermList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	const handleToolbar = (row) => {
		return <TermToolbar row={row} />;
	};

	const handleTerm = (row) => {
		const term = config.educationTerms.find(
			(item) => item.value === row.term
		);
		return term.label;
	};

	return (
		<div className="container">
			<Link
				href="/dashboard/education-term/new"
				className="btn btn-primary mb-3"
			>
				New
			</Link>
			<DataTable
				title="Term List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="Term" template={handleTerm} />
				<Column title="Start" field="startDate" />
				<Column title="End" field="endDate" />
				<Column
					title="Last Registration"
					field="lastRegistrationDate"
				/>
				<Column title="Tools" template={handleToolbar} />
			</DataTable>
		</div>
	);
};

export default TermList;
