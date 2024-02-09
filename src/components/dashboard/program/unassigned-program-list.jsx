"use client";
import { assignProgramAction } from "@/actions/teacher-actions";
import DataTable, { Column } from "@/components/common/form-fields/data-table";
import SubmitButton from "@/components/common/form-fields/submit-button";
import Spacer from "@/components/common/misc/spacer";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";

const UnAssignedProgramList = ({ programs, teachers }) => {
	const [state, dispatch] = useFormState(
		assignProgramAction,
		initialResponse
	);

	const handleLessonNames = (row) => {
		return row.lessonName.map((item) => item.lessonName).join("-");
	};

	return (
		<div className="container">
			<form action={dispatch} noValidate>
				<DataTable
					id="lessonProgramId"
					title="Unassigned Programs"
					dataSource={programs}
					dataKey="lessonProgramId"
					selectionMode="multiple"
					error={state?.errors?.lessonProgramId}
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
							className={`form-select ${isInvalid(
								state?.errors?.teacherId
							)}`}
							id="teacherId"
							name="teacherId"
							aria-label="Select teacher"
						>
							<option value="" selected>
								Select
							</option>
							{teachers.map((item) => (
								<option value={item.userId} key={item.userId}>
									{item.name} {item.surname}
								</option>
							))}
						</select>
						<label htmlFor="floatingSelect">Teacher</label>
						<div className="invalid-feedback">
							{state?.errors?.teacherId}
						</div>
					</div>
					<SubmitButton title="Assign" />
				</div>
			</form>
		</div>
	);
};

export default UnAssignedProgramList;
