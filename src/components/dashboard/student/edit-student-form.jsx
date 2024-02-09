"use client";
import { updateStudentAction } from "@/actions/student-actions";
import CancelButton from "@/components/common/form-fields/cancel-button";
import SubmitButton from "@/components/common/form-fields/submit-button";
import { config } from "@/helpers/config";
import { initialResponse, isInvalid } from "@/helpers/form-validation";
import { useFormState } from "react-dom";
import InputMask from "react-input-mask-next";

const EditStudentForm = ({ student, advisorTeachers }) => {
	const [state, dispatch] = useFormState(
		updateStudentAction,
		initialResponse
	);

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
						<input type="hidden" name="id" value={student.id} />
						<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.name
										)}`}
										id="name"
										name="name"
										placeholder="First Name"
										defaultValue={student.name}
									/>
									<label htmlFor="name">First Name</label>
									<div className="invalid-feedback">
										{state.errors?.name}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.surname
										)}`}
										id="surname"
										name="surname"
										placeholder="Last Name"
										defaultValue={student.surname}
									/>
									<label htmlFor="surname">Last Name</label>
									<div className="invalid-feedback">
										{state.errors?.surname}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.gender
										)}`}
										id="gender"
										name="gender"
										defaultValue={student.gender}
									>
										<option value="">Select</option>
										{config.genders.map((item) => (
											<option
												value={item.value}
												key={item.value}
											>
												{item.label}
											</option>
										))}
									</select>
									<label htmlFor="gender">Gender</label>
									<div className="invalid-feedback">
										{state.errors?.gender}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="date"
										className={`form-control ${isInvalid(
											state.errors?.birthDay
										)}`}
										id="birthDay"
										name="birthDay"
										placeholder="Birthdate"
										defaultValue={student.birthDay}
									/>
									<label htmlFor="birthDay">Birthdate</label>
									<div className="invalid-feedback">
										{state.errors?.birthDay}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.birthPlace
										)}`}
										id="birthPlace"
										name="birthPlace"
										placeholder="Place of birth"
										defaultValue={student.birthPlace}
									/>
									<label htmlFor="birthPlace">
										Place of birth
									</label>
									<div className="invalid-feedback">
										{state.errors?.birthPlace}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.motherName
										)}`}
										id="motherName"
										name="motherName"
										placeholder="Mother name"
										defaultValue={student.motherName}
									/>
									<label htmlFor="motherName">
										Mother name
									</label>
									<div className="invalid-feedback">
										{state.errors?.motherName}
									</div>
								</div>
							</div>

							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.fatherName
										)}`}
										id="fatherName"
										name="fatherName"
										placeholder="Father name"
										defaultValue={student.fatherName}
									/>
									<label htmlFor="fatherName">
										Father name
									</label>
									<div className="invalid-feedback">
										{state.errors?.fatherName}
									</div>
								</div>
							</div>

							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.email
										)}`}
										id="email"
										name="email"
										placeholder="Email"
										defaultValue={student.email}
									/>
									<label htmlFor="email">Email</label>
									<div className="invalid-feedback">
										{state.errors?.email}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<InputMask
										className={`form-control ${isInvalid(
											state.errors?.phoneNumber
										)}`}
										id="phoneNumber"
										name="phoneNumber"
										placeholder="Phone number"
										mask="999-999-9999"
										defaultValue={student.phoneNumber}
									/>
									<label htmlFor="phoneNumber">
										Phone number
									</label>
									<div className="invalid-feedback">
										{state.errors?.phoneNumber}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<InputMask
										className={`form-control ${isInvalid(
											state.errors?.ssn
										)}`}
										id="ssn"
										name="ssn"
										placeholder="SSN"
										mask="999-99-9999"
										defaultValue={student.ssn}
									/>
									<label htmlFor="ssn">SSN</label>
									<div className="invalid-feedback">
										{state.errors?.ssn}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<select
										className={`form-select ${isInvalid(
											state.errors?.advisorTeacherId
										)}`}
										id="advisorTeacherId"
										name="advisorTeacherId"
										defaultValue={student.advisorTeacherId}
									>
										<option value="">Select</option>
										{advisorTeachers.map((item) => (
											<option
												value={item.advisorTeacherId}
												key={item.advisorTeacherId}
											>
												{item.teacherName}{" "}
												{item.teacherSurname}
											</option>
										))}
									</select>
									<label htmlFor="advisorTeacherId">
										Advisor
									</label>
									<div className="invalid-feedback">
										{state.errors?.advisorTeacherId}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="text"
										className={`form-control ${isInvalid(
											state.errors?.username
										)}`}
										id="username"
										name="username"
										placeholder="Username"
										defaultValue={student.username}
									/>
									<label htmlFor="username">Username</label>
									<div className="invalid-feedback">
										{state.errors?.username}
									</div>
								</div>
							</div>

							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${isInvalid(
											state.errors?.password
										)}`}
										id="password"
										name="password"
										placeholder="Password"
									/>
									<label htmlFor="password">Password</label>
									<div className="invalid-feedback">
										{state.errors?.password}
									</div>
								</div>
							</div>
							<div className="col">
								<div className="form-floating mb-3">
									<input
										type="password"
										className={`form-control ${isInvalid(
											state.errors?.confirmPassword
										)}`}
										id="confirmPassword"
										name="confirmPassword"
										placeholder="Confirm password"
									/>
									<label htmlFor="confirmPassword">
										Confirm password
									</label>
									<div className="invalid-feedback">
										{state.errors?.confirmPassword}
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

export default EditStudentForm;
