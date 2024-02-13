import LoadingList from "@/components/common/misc/loading-list";
import Spacer from "@/components/common/misc/spacer";
import PageHeader from "@/components/common/page-header";
import React from "react";

const Loading = () => {
	return (
		<>
			<PageHeader title="Grades & Meets" />
			<Spacer height={50} />
			<LoadingList
				rowCount={5}
				colCount={8}
				showButton={false}
				title="Grades"
			/>
			<Spacer />
			<LoadingList
				rowCount={5}
				colCount={4}
				showButton={false}
				title="Meets"
			/>
			<Spacer />
		</>
	);
};

export default Loading;
