import scaleImg from "@/public/scale.jpg";
import { Hearo } from "../components/hearo";

function ScalePage() {
  return (
    <Hearo
      imgData={scaleImg}
      imgAlt="steel factory"
      title="Scale your app to infinty."
    />
  );
}

export default ScalePage;
