import Image from "next/image";
import homeImage from "@/public/home.jpg";
import { Hearo } from "./components/hearo";
export default function Home() {
  return (
    <main>
      <Hearo
        imgData={homeImage}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </main>
  );
}
