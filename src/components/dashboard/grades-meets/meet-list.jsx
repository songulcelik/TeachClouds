"use client";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import { formatDateLL, formatTimeLT } from "@/helpers/date-time";

const MeetList = ({ meets }) => {
	const handleTime = (row) =>
		`${formatTimeLT(row.startTime)} - ${formatTimeLT(row.stopTime)}`;

	const handleDate = (row) => formatDateLL(row.date);

	return (
		<div className="container">
			<DataTable id="meet" title="Meets" dataSource={meets} dataKey="id">
				<Column index={true} title="#" />
				<Column title="Date" template={handleDate} />
				<Column title="Start-End" template={handleTime} />
				<Column title="Description" field="description" />
			</DataTable>
		</div>
	);
};

export default MeetList;
