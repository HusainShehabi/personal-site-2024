import GridItem from "./GridItem";
import CertificatesCard from "./content/CertificatesCard";
import ExperienceCard from "./content/ExperienceCard";
import FooterCard from "./content/FooterCard";
import IntroductionCard from "./content/IntroductionCard";
import ProjectsCard from "./content/ProjectsCard";
import SocialsCard from "./content/SocialsCard";
import hero from "../assets/2.jpg";

export default function CssGrid() {
  return (
    <div className="relative min-h-screen">
      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 p-4 min-h-screen">
        <GridItem className="col-span-3 row-span-2">
          <IntroductionCard />
        </GridItem>
        <GridItem className="col-span-3 xl:col-span-2 row-span-3">
          <ExperienceCard />
        </GridItem>
        <GridItem className="col-span-3 xl:col-span-3 row-span-3">
          <CertificatesCard />
        </GridItem>
        <GridItem className="col-span-3 xl:col-span-2 row-span-1">
          <SocialsCard />
        </GridItem>
        <GridItem className="col-span-3 xl:col-span-2 row-span-3">
          <ProjectsCard />
        </GridItem>
        <GridItem className="col-span-3 xl:col-span-3 row-span-2">
          <FooterCard />
        </GridItem>
      </div>

      {/* Overlay Image */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-20 z-50 pointer-events-none"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>
    </div>
  );
}
