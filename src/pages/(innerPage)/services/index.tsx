import ServicesAreaOne from "@/components/services/servicesAreaOne";
import PageHeader from "@/components/pageHeader";
import { servicesData } from "@/db/servicesData";

export default function Services() {
  return (
    <>
      <PageHeader title="Services" />
      <div className="pb-120 border-bottom"></div>
      <ServicesAreaOne
        titleShown={false}
        data={servicesData}
        className="border-top-0 border-bottom-0"
      />
    </>
  );
}