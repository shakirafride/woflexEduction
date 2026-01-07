import PartnersClient from "./partnersClient";

export interface PartnerType {
  partner: string;
  star: string;
}

const data: PartnerType[] = [
  {
    partner: "/images/partners/partner1.svg",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/partners/partner2.svg",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/partners/partner3.svg",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/partners/partner4.svg",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/partners/partner5.svg",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/partners/partner6.svg",
    star: "/images/partners/star.svg",
  },
  {
    partner: "/images/partners/partner7.svg",
    star: "/images/partners/star.svg",
  },
];

const Partners = () => {
  return <PartnersClient data={data} />;
};

export default Partners;
