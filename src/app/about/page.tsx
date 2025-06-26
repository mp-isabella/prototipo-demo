import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Mi",
  description: "Este es un demo",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Acerca de la página"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in nunc euismod, mattis nulla at, fringilla metus."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
