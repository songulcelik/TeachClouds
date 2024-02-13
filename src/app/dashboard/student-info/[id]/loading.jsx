import LoadingForm from "@/components/common/misc/loading-form";
import Spacer from "@/components/common/misc/spacer";
import PageHeader from "@/components/common/page-header";

const Loading = () => {
	return (
		<>
			<PageHeader title="Edit Student Info" />
			<Spacer height={50} />
			<LoadingForm
				title="Edit"
				inputCount={7}
				button1Title="Cancel"
				button2Title="Update"
			/>
			<Spacer />
		</>
	);
};

export default Loading;
