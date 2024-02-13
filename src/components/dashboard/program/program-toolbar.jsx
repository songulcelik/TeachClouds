"use client";
import { deleteProgramAction } from "@/actions/program-actions";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import React from "react";
import { TfiTrash } from "react-icons/tfi";

const ProgramToolbar = ({ row }) => {
	const { lessonProgramId } = row;

	const handleDelete = async () => {
		const res = await swalConfirm("Are you sure to delete");
		if (!res.isConfirmed) return;

		try {
			const res = await deleteProgramAction(lessonProgramId);
		} catch (err) {
			console.log(err);
			swalAlert(err.message, "error");
		}
	};


	return (
		<div>
			<button
				type="button"
				className="btn btn-link"
				onClick={handleDelete}
			>
				<TfiTrash />
			</button>
		</div>
	);
};

export default ProgramToolbar;
