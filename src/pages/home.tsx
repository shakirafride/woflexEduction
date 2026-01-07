import AboutAreaOne from "@/components/about/aboutAreaOne";
import BlogsAreaOne from "@/components/blogs/blogsAreaOne";
import ServicesAreaOne from "@/components/services/servicesAreaOne";
import FeaturesArea from "@/components/features/featuresArea";
import FeedbackOne from "@/components/feedbacks/feedbackOne";
import HeroOne from "@/components/hero/heroOne";
import TeamAreaOne from "@/components/teams/teamAreaOne";
import WhyChooseUs from "@/components/whyChooseUs";
import { blogPostsDataOne } from "@/db/blogPostsData";
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
      <BlogsAreaOne data={blogPostsDataOne.slice(0, 3)} titleShown={true} />
    </>
  );
};