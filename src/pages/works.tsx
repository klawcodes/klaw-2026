// src/pages/works.tsx
import React from "react";
import { Link } from "gatsby";
import { worksData } from "../data/works";
const Footer = React.lazy(() => import("../components/Footer"));
const CardNav = React.lazy(() => import("../components/CardNav"));
const SmoothScrolling = React.lazy(
  () => import("../components/SmoothScrolling"),
);

const items = [
  {
    label: "About",
    bgColor: "#0D0716",
    textColor: "#fff",
    links: [
      { label: "Company", ariaLabel: "About Company" },
      { label: "Careers", ariaLabel: "About Careers" },
    ],
  },
  {
    label: "Projects",
    bgColor: "#170D27",
    textColor: "#fff",
    links: [
      { label: "Featured", ariaLabel: "Featured Projects" },
      { label: "Case Studies", ariaLabel: "Project Case Studies" },
    ],
  },
  {
    label: "Contact",
    bgColor: "#271E37",
    textColor: "#fff",
    links: [
      { label: "Email", ariaLabel: "Email us" },
      { label: "Twitter", ariaLabel: "Twitter" },
      { label: "LinkedIn", ariaLabel: "LinkedIn" },
    ],
  },
];

const WorksPage = () => {
  return (
    <SmoothScrolling>
      <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="relative z-50">
          <CardNav
            logoAlt="Company Logo"
            items={items}
            menuColor="#fff"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
        </div>

        <div className="max-w-7xl mx-auto my-24">
          <div className="mb-8">
            <p className="text-gray-400 text-sm lg:text-base tracking-wider">
              <Link to="/">home</Link>
            </p>
          </div>
          <h1 className="text-4xl font-bold text-white mb-8">Featured Works</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {worksData.map((work) => (
              <Link
                key={work.id}
                to={`/works/${work.slug}`}
                className="group relative rounded-lg overflow-hidden transition-all duration-300"
              >
                {/* Glassmorphism Card */}
                <div className="relative bg-gradient-to-br from-gray-500/20 to-slate-600/20 backdrop-blur-sm border border-slate-500/30 hover:border-slate-500/50 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-slate-500/20">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={work.content.images[0]}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-white mb-2 group-hover:text-slate-200 transition-colors">
                      {work.title}
                    </h2>
                    <p className="text-gray-300 mb-4 text-sm">
                      {work.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {work.content.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 text-slate-200 text-xs rounded-full border border-slate-600/50 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default WorksPage;
