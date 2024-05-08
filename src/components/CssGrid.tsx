import GridItem from "./GridItem";
import IntroductionCard from "./content/IntroductionCard";

type Props = {};

export default function CssGrid({}: Props) {
  return (
    <div className="grid grid-cols-5 gap-5 p-4  min-h-screen">
      <GridItem className="col-span-3 row-span-4">
        <IntroductionCard />
      </GridItem>
      <GridItem className="col-span-2 row-span-3">medium Item</GridItem>
      <GridItem className="col-span-2 row-span-1">Small Item</GridItem>
      <GridItem className="col-span-1 row-span-2">Tall Item</GridItem>
      <GridItem className="col-span-4 row-span-2">Wide Item</GridItem>
    </div>
  );
}
