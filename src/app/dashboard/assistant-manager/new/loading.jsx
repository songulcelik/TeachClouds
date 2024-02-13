import LoadingForm from "@/components/common/misc/loading-form";
import Spacer from "@/components/common/misc/spacer";
import PageHeader from "@/components/common/page-header";

const Loading = () => {
	return (
		<>
			<PageHeader title="New Assistant" />
			<Spacer height={50} />
			<LoadingForm
				title="New"
				inputCount={10}
				button1Title="Cancel"
				button2Title="Create"
			/>
			<Spacer />
		</>
	);
};

export default Loading;
