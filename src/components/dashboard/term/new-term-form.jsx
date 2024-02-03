"use client";
import { createTermAction } from "@/actions/term-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { config } from "@/helpers/config";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";

const NewTermForm = () => {
	const [state, dispatch] = useFormState(createTermAction, initialResponse);

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
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.term
										)}`}
										id="term"
										name="term"
									>
										<option value="">Select</option>
										{config.educationTerms.map((item) => (
											<option
												value={item.value}
												key={item.value}
											>
												{item.label}
											</option>
										))}
									</select>
									<label htmlFor="term">Term</label>
									<div className="invalid-feedback">
										{state.errors?.term}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="date"
										className={`form-control ${isInvalid(
											state.errors?.startDate
										)}`}
										id="startDate"
										name="startDate"
										placeholder="Start date"
									/>
									<label htmlFor="startDate">Start date</label>
									<div className="invalid-feedback">
										{state.errors?.startDate}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="date"
										className={`form-control ${isInvalid(
											state.errors?.endDate
										)}`}
										id="endDate"
										name="endDate"
										placeholder="End date"
									/>
									<label htmlFor="endDate">End date</label>
									<div className="invalid-feedback">
										{state.errors?.endDate}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="date"
										className={`form-control ${isInvalid(
											state.errors?.lastRegistrationDate
										)}`}
										id="lastRegistrationDate"
										name="lastRegistrationDate"
										placeholder="Last registration date"
									/>
									<label htmlFor="lastRegistrationDate">Last registration date</label>
									<div className="invalid-feedback">
										{state.errors?.lastRegistrationDate}
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

export default NewTermForm;
