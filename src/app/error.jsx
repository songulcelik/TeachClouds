"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
	useEffect(() => {
		console.log(error);
	}, [error]);

	return (
		<div>
			<h2>Something went wrong</h2>

			<button className="btn btn-primary" onClick={() => reset()}>
				Try Again
			</button>
		</div>
	);
};

export default Error;
