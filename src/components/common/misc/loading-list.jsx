import React from "react";

const LoadingList = ({
	title = "",
    buttonTitle="",
	colCount = 5,
	rowCount = 5,
	showButton = true,
}) => {
	return (
		<div className="container">
			{showButton ? (
				<div className="btn btn-primary mb-3 placeholder-glow">
					<span className="placeholder">{buttonTitle}</span>
				</div>
			) : null}

			<div className="card">
				<div className="card-body">
					<h3 className="card-title">{title}</h3>

					<table class="table table-striped ">
						<thead>
							<tr>
								{[...new Array(colCount)].map((_, index) => (
									<th
										scope="col"
										className="placeholder-glow"
										key={index}
									>
										<span className="placeholder col-4"></span>
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{[...new Array(rowCount)].map((_, indexRow) => (
								<tr key={indexRow}>
									{[...new Array(colCount)].map(
										(_, indexCol) => (
											<td
												scope="row"
												className="placeholder-glow"
												key={indexCol}
											>
												<span className="placeholder col-6"></span>
											</td>
										)
									)}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default LoadingList;
