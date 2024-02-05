"use client";
import { createProgramAction } from "@/actions/program-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import MultiSelect from "@/components/common/form-fields/multi-select";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { config } from "@/helpers/config";
import { formatDateYYYYMMM } from "@/helpers/date-time";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";

const NewProgramForm = ({ terms, lessons }) => {
	const [state, dispatch] = useFormState(
		createProgramAction,
		initialResponse
	);

	const getTermTitle = (item) => {
		const termItem = config.educationTerms.find(
			(term) => term.value === item.term
		);

		const time = formatDateYYYYMMM(item.startDate);

		return `${termItem.label} ${time}`;
	};

	return (
		<div className="container ">
			<div className="card">
				<div className="card-body">
					<div className="card-title">New</div>

					{state?.message ? (
						<div className="alert alert-danger">
							{state.message}
						</div>
					) : null}

					<form action={dispatch} noValidate>
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
							<div className="col">
								<MultiSelect
									options={lessons}
									optionValue="lessonId"
									optionLabel="lessonName"
									placeholder="Select"
									id="lessonIdList"
									error={state.errors?.lessonIdList}
								/>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.educationTermId
										)}`}
										id="educationTermId"
										name="educationTermId"
									>
										<option value="">Select</option>
										{terms.map((item) => (
											<option
												value={item.id}
												key={item.id}
											>
												{getTermTitle(item)}
											</option>
										))}
									</select>
									<label htmlFor="educationTermId">
										Term
									</label>
									<div className="invalid-feedback">
										{state.errors?.educationTermId}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.day
										)}`}
										id="day"
										name="day"
									>
										<option value="">Select</option>
										{config.days.map((item) => (
											<option
												value={item.value}
												key={item.value}
											>
												{item.label}
											</option>
										))}
									</select>
									<label htmlFor="day">Day</label>
									<div className="invalid-feedback">
										{state.errors?.day}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="time"
										className={`form-control ${isInvalid(
											state.errors?.startTime
										)}`}
										id="startTime"
										name="startTime"
										placeholder="Start time"
									/>
									<label htmlFor="startTime">
										Start time
									</label>
									<div className="invalid-feedback">
										{state.errors?.startTime}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="time"
										className={`form-control ${isInvalid(
											state.errors?.stopTime
										)}`}
										id="stopTime"
										name="stopTime"
										placeholder="End time"
									/>
									<label htmlFor="stopTime">End time</label>
									<div className="invalid-feedback">
										{state.errors?.stopTime}
									</div>
								</div>
							</div>
						</div>

						<div className="d-flex align-items-center justify-content-center gap-3">
							<CancelButton />
							<SubmitButton title="Create" />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default NewProgramForm;
