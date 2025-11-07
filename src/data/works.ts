export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: {
    overview: string;
    technologies: string[];
    images: string[];
  };
}

export const worksData: Work[] = [
  {
    id: "1",
    slug: "awas-imsak",
    title: "Awas Imsak",
    description: "Website project",
    content: {
      overview:
        "Awas Imsak is a web application designed to help Muslims in Indonesia track their prayer times, with a special focus on Imsak timing during Ramadan. Built with Next.js and TypeScript, this project showcases modern web development practices while serving a practical religious purpose.",
      technologies: ["Next JS", "TypeScript", "Tailwind"],
      images: ["/images/project/awas-imsak-mockup.png"], // Path langsung dari static
    },
  },
  {
    id: "2",
    slug: "republik-rempah",
    title: "Republik Rempah",
    description: "E-commerce platform for Indonesian spices",
    content: {
      overview:
        "An e-commerce platform dedicated to selling premium Indonesian spices and ready-to-use seasonings. Created for Ahmad Septian, a spice entrepreneur from East Bekasi, this Laravel and Livewire-powered website brings traditional flavors to the digital age.",
      technologies: ["Laravel", "Livewire", "Tailwind CSS"],
      images: ["/images/project/republik-rempah-mockup.png"],
    },
  },
  {
    id: "3",
    slug: "donasikita",
    title: "DonasiKita",
    description: "Donation platform",
    content: {
      overview:
        "Platform donasi untuk membantu berbagai kegiatan sosial dan kemanusiaan.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      images: ["/images/project/donasikita-mockup.png"],
    },
  },
  {
    id: "4",
    slug: "capres-facts",
    title: "Capres Facts",
    description: "Presidential candidate information platform",
    content: {
      overview:
        "Platform informasi untuk mengetahui fakta-fakta tentang kandidat capres.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      images: ["/images/project/capresfacts-mockup.png"],
    },
  },
];
