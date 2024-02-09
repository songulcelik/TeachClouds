"use client";
import Link from "next/link";
import React, { useState } from "react";

export const Column = ({ title }) => {
	return <th scope="col">{title}</th>;
};

const Row = ({ children, selected, selectionMode, onClick }) => {
	return (
		<tr
			onClick={onClick}
			className={selected ? "table-primary" : ""}
			style={{
				cursor:
					selectionMode && selectionMode !== "none" ? "pointer" : "",
			}}
		>
			{children}
		</tr>
	);
};

const Cell = ({ children }) => {
	return <td>{children}</td>;
};

const NoRecordFound = ({ colLength }) => {
	return (
		<tr>
			<td colSpan={colLength}>No records found</td>
		</tr>
	);
};

const FirstPageButton = ({ pageNumber }) => {
	return (
		<li className="page-item">
			<Link
				className={`page-link ${pageNumber ? "" : "disabled"} `}
				href="?page=0"
				aria-label="Previous"
				scroll={false}
			>
				<span aria-hidden="true">&laquo;</span>
			</Link>
		</li>
	);
};

const PreviousPageButton = ({ pageNumber }) => {
	return (
		<li className="page-item  d-none d-sm-block">
			<Link
				className={`page-link ${pageNumber ? "" : "disabled"} `}
				href={`?page=${pageNumber - 1}`}
				aria-label="Previous"
				scroll={false}
			>
				<span aria-hidden="true">&lsaquo;</span>
			</Link>
		</li>
	);
};

const PageButton = ({ totalPages, pageNumber }) => {
	const totalAmountOfButton = 5;

	const startPage = Math.max(
		0,
		pageNumber - Math.floor(totalAmountOfButton / 2)
	);
	const endPage = Math.min(totalPages, startPage + totalAmountOfButton);

	return [...new Array(endPage - startPage)].map((_, index) => (
		<li className="page-item" key={index} aria-current="page">
			<Link
				className={`page-link ${
					pageNumber === startPage + index ? "disabled" : ""
				}`}
				href={`?page=${startPage + index}`}
				scroll={false}
			>
				{startPage + index + 1}
			</Link>
		</li>
	));
};

const NextPageButton = ({ totalPages, pageNumber }) => {
	return (
		<li className="page-item d-none d-sm-block">
			<Link
				className={`page-link ${
					pageNumber >= totalPages - 1 ? "disabled" : ""
				}`}
				href={`?page=${pageNumber + 1}`}
				aria-label="Next"
				scroll={false}
			>
				<span aria-hidden="true">&rsaquo;</span>
			</Link>
		</li>
	);
};

const LastPageButton = ({ totalPages, pageNumber }) => {
	return (
		<li className="page-item">
			<Link
				className={`page-link ${
					pageNumber >= totalPages - 1 ? "disabled" : ""
				}`}
				href={`?page=${totalPages - 1}`}
				aria-label="Next"
				scroll={false}
			>
				<span aria-hidden="true">&raquo;</span>
			</Link>
		</li>
	);
};

const Pagination = ({ totalPages, pageNumber, pageSize }) => {
	if (totalPages <= 1) return null;

	return (
		<nav
			aria-label="Page navigation"
			className="d-flex justify-content-center "
		>
			<ul className="pagination">
				<FirstPageButton pageNumber={pageNumber} />
				<PreviousPageButton pageNumber={pageNumber} />
				<PageButton pageNumber={pageNumber} totalPages={totalPages} />
				<NextPageButton
					pageNumber={pageNumber}
					totalPages={totalPages}
				/>
				<LastPageButton
					pageNumber={pageNumber}
					totalPages={totalPages}
				/>
			</ul>
		</nav>
	);
};

const DataTable = ({
	id,
	title,
	dataSource,
	dataKey,
	pagination,
	totalPages,
	pageNumber,
	pageSize,
	children,
	selectionMode, // single | multiple | none
	selection, // update yapilarinda onceden secili olarak gelmesi istenilen elemanlarin listesi
	error,
}) => {
	const [selectedItems, setSelectedItems] = useState(selection ?? []);

	if (!dataSource) throw new Error("dataSource attribute is required");
	if (!Array.isArray(dataSource))
		throw new Error("dataSource value must be an array");
	if (!dataKey) throw new Error("dataKey attribute is required");

	// children korumali bir prop oldugu icin uzerinde degisiklik yapmaya izin vermez
	// degisiklik yapabilmek icin kopyasini olusturduk
	const columns = [...children];

	if (!pageSize) pageSize = 0;
	if (!pageNumber) pageNumber = 0;

	if (selectionMode && selectionMode !== "none") {
		columns.splice(
			1,
			0,
			<Column selectionMode={selectionMode} title="Select" />
		);
	}

	const handleSelectedItems = (id) => {
		let arr = [...selectedItems];

		if (!arr.includes(id)) {
			arr.push(id);
		} else {
			arr = arr.filter((item) => item !== id);
		}
		setSelectedItems(arr);
	};

	//console.log(selectedItems);

	return (
		<>
			<input
				type="hidden"
				name={id}
				value={JSON.stringify(selectedItems)}
			/>
			<div className={`card ${error ? "border-danger" : ""}`}>
				<div className="card-body">
					<h3 className="card-title">{title}</h3>

					<div className="table-responsive">
						<table className="table table-striped ">
							<thead>
								<tr>
									{columns.map((item) => (
										<Column
											key={item.props.title}
											{...item.props}
										/>
									))}
								</tr>
							</thead>
							<tbody>
								{dataSource.length <= 0 ? (
									<NoRecordFound colLength={columns.length} />
								) : null}

								{dataSource.map((row, indexRow) => {
									//console.log(row);
									const selected = selectedItems.includes(
										row[dataKey].toString()
									);

									return (
										<Row
											key={`row-${row[dataKey]}`}
											selected={selected}
											selectionMode={selectionMode}
											onClick={() =>
												handleSelectedItems(
													row[dataKey].toString()
												)
											}
										>
											{columns.map((column) => {
												const {
													field,
													index,
													title,
													template,
													selectionMode,
												} = column.props;
												let cellData = "";

												if (index) {
													cellData =
														pageSize * pageNumber +
														indexRow +
														1;
												} else if (
													selectionMode &&
													selectionMode !== "none"
												) {
													cellData =
														selectionMode ===
														"single" ? (
															<input
																type="radio"
																className="form-check-input"
																name="rd"
																value={
																	row[dataKey]
																}
																onChange={(e) =>
																	handleSelectedItems(
																		e.target
																			.value
																	)
																}
																checked={
																	selected
																}
															/>
														) : (
															<input
																type="checkbox"
																className="form-check-input"
																value={
																	row[dataKey]
																}
																onChange={(e) =>
																	handleSelectedItems(
																		e.target
																			.value
																	)
																}
																checked={
																	selected
																}
															/>
														);
												} else if (field) {
													cellData = row[field];
												} else if (template) {
													if (
														typeof template !==
														"function"
													) {
														throw new Error(
															"template prop must be a function"
														);
													}

													cellData = template(row);
												}

												return (
													<Cell
														key={`col-${row[dataKey]}-${title}`}
													>
														{cellData}
													</Cell>
												);
											})}
										</Row>
									);
								})}
							</tbody>
						</table>
					</div>
					{pagination ? (
						<Pagination
							totalPages={totalPages}
							pageNumber={pageNumber}
							pageSize={pageSize}
						/>
					) : null}
				</div>

				{error ? <div className="p-3 text-danger">{error}</div> : null}
			</div>
		</>
	);
};

export default DataTable;
