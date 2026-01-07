// Define a reusable Instructor type
export interface Instructor {
  readonly name: string;
  readonly image: string;
  readonly role: string;
}

// Main Course type
export interface Course {
  readonly icon?: string;
  readonly title: string;
  readonly description: string;
  readonly instructor: Instructor;
}

// Strictly typed data
export const coursesData: Course[] = [
  {
    title: 'English Speaking',
    description: "Learn the Beauty of English",
    instructor: {
      name: "Steven James",
      role: "Instructor",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: " Hindi Speaking",
    description: "Learn the Beauty of Hindi",
    instructor: {
      name: "Michael Eller",
      role: "Instructor",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: "Urdu Speaking",
    description: "Learn the Beauty of Urdu",
    instructor: {
      name: "Charles Ferrell",
      role: "Instructor",
      image: "/images/users/user3.jpg",
    },
  },
  {
    title: 'Spanish Speaking',
    description: "Learn the Beauty of Spanish",
    instructor: {
      name: "Steven James",
      role: "Instructor",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: "Turki Speaking",
    description: "Learn the Beauty of Turki",
    instructor: {
      name: "Michael Eller",
      role: "Instructor",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: "Turki Speaking",
    description: "Learn the Beauty of China",
    instructor: {
      name: "Charles Ferrell",
      role: "Instructor",
      image: "/images/users/user3.jpg",
    },
  },
  {
    title: "Arabic Speaking",
    description: "Learn the Beauty of Arabic",
    instructor: {
      name: "Steven James",
      role: "Instructor",
      image: "/images/users/user1.jpg",
    },
  },
  {
    title: "Bangla Speaking",
    description: "Learn the Beauty of Bangla",
    instructor: {
      name: "Michael Eller",
      role: "Instructor",
      image: "/images/users/user2.jpg",
    },
  },
  {
    title: "Hibru Speaking",
    description: "Learn the Beauty of Hibru",
    instructor: {
      name: "Charles Ferrell",
      role: "Instructor",
      image: "/images/users/user3.jpg",
    },
  },
];



// Strictly typed dataset
export const coursesDataThree: Course[] = [
  {
    icon: "/images/icons/english.svg",
    title: "English Speaking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
  {
    icon: "/images/icons/hindi.svg",
    title: "Hindi Speaking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
  {
    icon: "/images/icons/urdu.svg",
    title: "Urdu Speaking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
  {
    icon: "/images/icons/spanish.svg",
    title: "Spanish Speaking",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
    instructor: {
      image: "/images/users/user1.jpg",
      name: "Steven James",
      role: "Instructor",
    },
  },
];