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
  links?: {
    demo?: {
      url: string;
      isActive: boolean; // true = live, false = shutdown
    };
    repository?: {
      url: string;
      isPublic: boolean; // true = public, false = private
    };
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
      images: ["/images/project/awas-imsak-mockup.png"],
    },
    links: {
      demo: {
        url: "https://imsak.my.id",
        isActive: true,
      },
      repository: {
        url: "https://github.com/klawcodes/awas-imsak",
        isPublic: true,
      },
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
    links: {
      demo: {
        url: "https://republikrempah.com",
        isActive: true,
      },
      repository: {
        url: "",
        isPublic: false,
      },
    },
  },
  {
    id: "3",
    slug: "donasikita",
    title: "DonasiKita",
    description: "Donation platform",
    content: {
      overview:
        "A community-driven donation platform created for RT.003 residents to foster a better neighborhood through mutual aid. Built with CodeIgniter as part of a final semester project, this web application demonstrates the power of transparent giving and community engagement.",
      technologies: ["React", "Node.js", "PostgreSQL"],
      images: ["/images/project/donasikita-mockup.png"],
    },
    links: {
      demo: {
        url: "",
        isActive: false, // Website shutdown
      },
      repository: {
        url: "https://github.com/klawcodes/sisd",
        isPublic: true,
      },
    },
  },
  {
    id: "4",
    slug: "capres-facts",
    title: "Capres Facts",
    description: "Presidential candidate information platform",
    content: {
      overview:
        "A dynamic web platform showcasing comprehensive facts about Indonesia's 2024 presidential candidates. This website serves as a go-to resource for voters seeking reliable information about their potential leaders. Using HTML, Vanilla CSS, and JavaScript, the site delivers a clean, straightforward user experience focused on transparency and accessibility.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      images: ["/images/project/capresfacts-mockup.png"],
    },
    links: {
      demo: {
        url: "",
        isActive: false,
      },
      repository: {
        url: "https://github.com/klawcodes/capres-facts-web",
        isPublic: true,
      },
    },
  },
];
