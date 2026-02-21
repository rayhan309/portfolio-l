import SadiaAbout from "@/Components/About/About";
import SadiaContact from "@/Components/Contact/Contact";
import SadiaFooter from "@/Components/Footer/Footer";
import SadiaHero from "@/Components/Hero/Hero";
import SadiaProcess from "@/Components/HowItWork/HowItWork";
import SadiaServices from "@/Components/SadiaServices/SadiaServices";
import SadiaWorks from "@/Components/SadiaWorks/SadiaWorks";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SadiaHero />

      <SadiaAbout />

      <SadiaProcess />

      <SadiaWorks />

      <SadiaServices />

      <SadiaContact />

      <SadiaFooter />
    </main>
  );
}
