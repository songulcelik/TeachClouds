"use client";
import { deleteLessonAction } from "@/actions/lesson-actions";
import { swalAlert, swalConfirm } from "@/helpers/swal";
import React from "react";
import { TfiTrash } from "react-icons/tfi";

const LessonToolbar = ({ row }) => {
	const { lessonId } = row;

	const handleDelete = async () => {
		const res = await swalConfirm("Are you sure to delete?");
		if (!res.isConfirmed) return;

		try {
			const res = await deleteLessonAction(lessonId);
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

export default LessonToolbar;
