import performenceImg from "@/public/reliability.jpg";
import { Hearo } from "../components/hearo";

function ReliabilityPage() {
  return (
    <Hearo
      imgData={performenceImg}
      imgAlt="wlding"
      title="Super high reliability hosting"
    />
  );
}

export default ReliabilityPage;
