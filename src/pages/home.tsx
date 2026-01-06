import AboutAreaOne from "@/components/about/aboutAreaOne";
import ServicesAreaOne from "@/components/services/servicesAreaOne";
import FeaturesArea from "@/components/features/featuresArea";
import FeedbackOne from "@/components/feedbacks/feedbackOne";
import HeroOne from "@/components/hero/heroOne";
import TeamAreaOne from "@/components/teams/teamAreaOne";
import WhyChooseUs from "@/components/whyChooseUs";
import { servicesData } from "@/db/servicesData";
import { teamData } from "@/db/teamData";

export default function Home() { 
  return (
    <>
      <HeroOne />
      <FeaturesArea />
      <AboutAreaOne />
      <ServicesAreaOne data={servicesData.slice(0, 3)} titleShown={true} />
      <WhyChooseUs />
      <FeedbackOne />
      <TeamAreaOne data={teamData.slice(0, 4)} titleShown={true} />
    </>
  );
};