import GridItem from "./GridItem";
import CertificatesCard from "./content/CertificatesCard";
import ExperienceCard from "./content/ExperienceCard";
import FooterCard from "./content/FooterCard";
import IntroductionCard from "./content/IntroductionCard";
import SocialsCard from "./content/SocialsCard";

export default function CssGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 p-4 min-h-screen">
      <GridItem className="col-span-3 row-span-2">
        <IntroductionCard />
      </GridItem>
      <GridItem className="col-span-3 xl:col-span-2 row-span-3">
        <ExperienceCard />
      </GridItem>
      <GridItem className="col-span-3 xl:col-span-3 row-span-8">
        <CertificatesCard />
      </GridItem>
      <GridItem className="col-span-3 xl:col-span-2 row-span-1">
        <SocialsCard />
      </GridItem>
      <GridItem className="col-span-3 xl:col-span-2 row-span-6">
        <FooterCard />
      </GridItem>
    </div>
  );
}
