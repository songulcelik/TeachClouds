"use client";
import React, { useState } from "react";

const MultiSelect = ({
	options,
	optionValue,
	optionLabel,
	placeholder,
	values,
	id,
	error,
}) => {
	const [list, setList] = useState(Array.isArray(values) ? [...values] : []);
	console.log(list);
	const handleChange = (e) => {
		let arr = [];
		const id = e.target.value;

		if (list.includes(id)) {
			arr = list.filter((item) => item !== id);
		} else {
			arr = [...list, id];
		}
		setList(arr);
	};

	return (
		<>
			<input name={id} type="hidden" value={JSON.stringify(list)} />
			<div className="form-floating mb-3">
				<div
					className={`dropdown form-select p-0 ${
						error ? "is-invalid" : ""
					}`}
				>
					<div
						className="w-100 h-100 text-start d-flex align-items-center ps-2 pt-3 text-nowrap overflow-hidden"
						type="button"
						data-bs-toggle="dropdown"
						data-bs-auto-close="outside"
						aria-expanded="false"
					>
						{list && list.length > 0
							? list
									.map(
										(id) =>
											options.find(
												(item) =>
													item[optionValue] == id
											)[optionLabel]
									)
									.join("-")
							: "Select"}
					</div>
					<ul className="dropdown-menu w-100 m-0">
						{options.map((item) => (
							<li key={item[optionValue]} className="px-3 py-1">
								<div className="form-check">
									<input
										className="form-check-input"
										type="checkbox"
										id={`lesson-${item[optionValue]}`}
										style={{ cursor: "pointer" }}
										defaultValue={item[optionValue]}
										onChange={handleChange}
									/>
									<label
										className="form-check-label w-100"
										htmlFor={`lesson-${item[optionValue]}`}
										style={{ cursor: "pointer" }}
									>
										{item[optionLabel]}
									</label>
								</div>
							</li>
						))}
					</ul>
				</div>
				<label>{placeholder}</label>

				{error ? <div className="invalid-feedback">{error}</div> : null}
			</div>
		</>
	);
};

export default MultiSelect;
