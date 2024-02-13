"use client";
import { deleteAssistantAction } from "@/actions/assistant-actions";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import Link from "next/link";
import React from "react";
import { TfiPencil, TfiTrash } from "react-icons/tfi";

const AssistantToolbar = ({ row }) => {
	const { userId, built_in } = row;

	const handleDelete = async () => {
		const res = await swalConfirm("Are you sure to delete");
		if (!res.isConfirmed) return;

		try {
			const res = await deleteAssistantAction(userId);
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
				href={`/dashboard/assistant-manager/${userId}`}
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

export default AssistantToolbar;
