"use client"
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import Spacer from "@/components/common/spacer";
import React from "react";

const UnAssignedProgramList = ({ programs, teachers }) => {
	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	return (
		<div className="container">
			<form action="">
				
			</form>
			<DataTable
				title="Unassigned Programs"
				dataSource={programs}
				dataKey="lessonProgramId"
				selectionMode="single"
			>
				<Column index={true} title="#" />
				<Column title="Lessons" template={handleLessonNames} />
				<Column title="Day" field="day" />
				<Column title="Start" field="startTime" />
				<Column title="End" field="stopTime" />
			</DataTable>
			<Spacer height={15} />
			<div className="input-group mb-3">
				<div className="form-floating">
					<select
						className="form-select"
						id="floatingSelect"
						aria-label="Floating label select example"
					>
						<option value="" selected>Select</option>
						{teachers.map((item) => (
							<option value={item.userId} key={item.userId}>
								{item.name} {item.surname}
							</option>
						))}
					</select>
					<label htmlFor="floatingSelect">Works with selects</label>
				</div>
				<button className="btn btn-primary">Assign</button>
			</div>
		</div>
	);
};

export default UnAssignedProgramList;
