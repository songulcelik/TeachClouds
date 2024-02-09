"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Link from "next/link";
import React from "react";

const ContactMessageList = ({ data }) => {
	const { content, totalPages, number, size } = data;

	
	return (
		<div className="container">
			
			<DataTable
				title="Message List"
				dataSource={content}
				dataKey="id"
				pagination={true}
				totalPages={totalPages}
				pageNumber={number}
				pageSize={size}
			>
				<Column index={true} title="#" />
				<Column title="Name" field="name" />
				<Column title="Subject" field="subject" />
				<Column title="Email" field="email" />
				<Column title="Date" field="date" />
				<Column title="Message" field="message" />
				
			</DataTable>
		</div>
	);
};

export default ContactMessageList;
