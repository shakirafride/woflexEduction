// Define a reusable Expert type
export interface Expert {
  readonly name: string;
  readonly image: string;
  readonly role: string;
}

// Main Service type
export interface Service {
  readonly icon?: string;
  readonly title: string;
  readonly description: string;
  readonly expert: Expert;
}

// Strictly typed data
export const servicesData: Service[] = [
  {
    title: 'Web Development',
    description: "Build Modern Web Applications",
    expert: {
      name: "Steven James",
      role: "Senior Developer",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: "Mobile Development",
    description: "Create Powerful Mobile Apps",
    expert: {
      name: "Michael Eller",
      role: "Mobile Expert",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: "UI/UX Design",
    description: "Design Beautiful User Experiences",
    expert: {
      name: "Charles Ferrell",
      role: "Design Lead",
      image: "/images/users/user3.jpg",
    },
  },
  {
    title: 'Digital Marketing',
    description: "Grow Your Online Presence",
    expert: {
      name: "Steven James",
      role: "Marketing Specialist",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: "Cloud Solutions",
    description: "Scale Your Business Infrastructure",
    expert: {
      name: "Michael Eller",
      role: "Cloud Architect",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: "Data Analytics",
    description: "Transform Data into Insights",
    expert: {
      name: "Charles Ferrell",
      role: "Data Scientist",
      image: "/images/users/user3.jpg",
    },
  },
  {
    title: "Cybersecurity",
    description: "Protect Your Digital Assets",
    expert: {
      name: "Steven James",
      role: "Security Expert",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: "AI Solutions",
    description: "Implement Intelligent Automation",
    expert: {
      name: "Michael Eller",
      role: "AI Specialist",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: "Business Consulting",
    description: "Optimize Your Business Strategy",
    expert: {
      name: "Charles Ferrell",
      role: "Business Consultant",
      image: "/images/users/user3.jpg",
    },
  },
];

// Strictly typed dataset for featured services
export const servicesDataThree: Service[] = [
  {
    icon: "/images/icons/web-dev.svg",
    title: "Web Development",
    description:
      "Build responsive, modern web applications using cutting-edge technologies and best practices for optimal performance.",
    expert: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Senior Developer",
    },
  },
  {
    icon: "/images/icons/mobile-dev.svg",
    title: "Mobile Development",
    description:
      "Create native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    expert: {
      image: "/images/users/user2.jpg",
      name: "Michael Eller",
      role: "Mobile Expert",
    },
  },
  {
    icon: "/images/icons/design.svg",
    title: "UI/UX Design",
    description:
      "Design intuitive and engaging user interfaces that convert visitors into customers and enhance user satisfaction.",
    expert: {
      image: "/images/users/user3.jpg",
      name: "Charles Ferrell",
      role: "Design Lead",
    },
  },
  {
    icon: "/images/icons/marketing.svg",
    title: "Digital Marketing",
    description:
      "Develop comprehensive digital marketing strategies to increase brand visibility and drive business growth.",
    expert: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Marketing Specialist",
    },
  },
];