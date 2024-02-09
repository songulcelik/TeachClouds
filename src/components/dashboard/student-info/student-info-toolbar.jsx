"use client";
import { deleteStudentInfoAction } from "@/actions/student-info-actions";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { TfiPencil, TfiTrash } from "react-icons/tfi";

const StudentInfoToolbar = ({ row }) => {

	const { id, built_in } = row;

	const handleDelete = async () => {
		const res = await swalConfirm("Are you sure to delete?");
		if (!res.isConfirmed) return;

		try {
			const res = await deleteStudentInfoAction(id);
		} catch (err) {
			console.log(err);
			swalAlert(err.message, "error");
		}
	};

	if (built_in) return null;

	return (
		<div>
			<Link
				type="button"
				className="btn btn-link"
				href={`/dashboard/student-info/${id}`}
			>
				<TfiPencil />
			</Link>

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

export default StudentInfoToolbar;
