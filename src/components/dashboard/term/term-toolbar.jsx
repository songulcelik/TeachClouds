"use client";
import { deleteTermAction } from "@/actions/term-actions";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import React from "react";
import { TfiTrash } from "react-icons/tfi";

const TermToolbar = ({ row }) => {
	const { id, built_in } = row;

	const handleDelete = async () => {
		const res = await swalConfirm("Are you sure to delete");
		if (!res.isConfirmed) return;

		try {
			const res = await deleteTermAction(id);
		} catch (err) {
			console.log(err);
			swalAlert(err.message, "error");
		}
	};

	if (built_in) return null;

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

export default TermToolbar;
