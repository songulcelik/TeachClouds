"use client";
import { updateMeetAction } from "@/actions/meet-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import MultiSelect from "@/components/common/form-fields/multi-select";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";

const EditMeetForm = ({ meet, students }) => {
	const [state, dispatch] = useFormState(updateMeetAction, initialResponse);

	const selectedStudentIds = meet.students.map((item) => item.id.toString());

	return (
		<div className="container ">
			<div className="card">
				<div className="card-body">
					<div className="card-title">Edit</div>

					{state?.message ? (
						<div className="alert alert-danger">
							{state.message}
						</div>
					) : null}

					<form action={dispatch} noValidate>
						<input type="hidden" name="id" value={meet.id} />
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
							<div className="col-12">
								<MultiSelect
									options={students}
									optionValue="id"
									optionLabel="fullName"
									placeholder="Students"
									id="studentIds"
									error={state.errors?.studentIds}
									values={selectedStudentIds}
								/>
							</div>
							<div className="col-md-4">
								<div className="form-floating mb-3">
									<input
										type="date"
										className={`form-control ${isInvalid(
											state.errors?.date
										)}`}
										id="date"
										name="date"
										placeholder="Date"
										defaultValue={meet.date}
									/>
									<label htmlFor="date">Date</label>
									<div className="invalid-feedback">
										{state.errors?.date}
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="form-floating mb-3">
									<input
										type="time"
										className={`form-control ${isInvalid(
											state.errors?.startTime
										)}`}
										id="startTime"
										name="startTime"
										placeholder="Start"
										defaultValue={meet.startTime}
									/>
									<label htmlFor="startTime">Start</label>
									<div className="invalid-feedback">
										{state.errors?.startTime}
									</div>
								</div>
							</div>

							<div className="col-md-4">
								<div className="form-floating mb-3">
									<input
										type="time"
										className={`form-control ${isInvalid(
											state.errors?.stopTime
										)}`}
										id="stopTime"
										name="stopTime"
										placeholder="End"
										defaultValue={meet.stopTime}
									/>
									<label htmlFor="stopTime">End</label>
									<div className="invalid-feedback">
										{state.errors?.stopTime}
									</div>
								</div>
							</div>
							<div className="col-12">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.description
										)}`}
										id="description"
										name="description"
										placeholder="Description"
										defaultValue={meet.description}
									/>
									<label htmlFor="description">
										Description
									</label>
									<div className="invalid-feedback">
										{state.errors?.description}
									</div>
								</div>
							</div>
						</div>

						<div className="d-flex align-items-center justify-content-center gap-3">
							<CancelButton />
							<SubmitButton title="Update" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EditMeetForm;
