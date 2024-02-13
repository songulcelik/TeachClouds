import LoadingForm from "@/components/common/misc/loading-form";
import Spacer from "@/components/common/misc/spacer";
import PageHeader from "@/components/common/page-header";

const Loading = () => {
	return (
		<>
			<PageHeader title="New Student Info" />
			<Spacer height={50} />
			<LoadingForm
				title="New"
				inputCount={7}
				button1Title="Cancel"
				button2Title="Create"
			/>
			<Spacer />
		</>
	);
};

export default Loading;
