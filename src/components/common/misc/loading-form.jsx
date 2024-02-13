import React from "react";

const LoadingForm = ({
	title = "",
	inputCount = 10,
	button1Title = "Cancel",
	button2Title = "Create",
}) => {
	return (
		<div className="container ">
			<div className="card">
				<div className="card-body">
					<div className="card-title">{title}</div>

					<div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
						{[...new Array(inputCount)].map((_, index) => (
							<div
								className="col placeholder-glow form-floating mb-3"
								key={index}
							>
								<span className="placeholder form-control"></span>
							</div>
						))}
					</div>

					<div className="d-flex align-items-center justify-content-center gap-3 placeholder-glow">
						<span className="placeholder btn btn-secondary">
							{button1Title}
						</span>
						<span className="placeholder btn btn-primary">
							{button2Title}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LoadingForm;
