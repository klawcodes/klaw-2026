import React from "react";
import { worksData } from "../data/works";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { ExternalLink, Github, XCircle, Lock } from "lucide-react";

const SmoothScrolling = React.lazy(
  () => import("../components/SmoothScrolling"),
);

const Footer = React.lazy(() => import("../components/Footer"));
const CardNav = React.lazy(() => import("../components/CardNav"));

interface WorkDetailProps {
  pageContext: {
    workId: string;
  };
}

const WorkDetail: React.FC<WorkDetailProps> = ({ pageContext }) => {
  const work = worksData.find((w) => w.id === pageContext.workId);

  if (!work) {
    return <div>Work not found</div>;
  }

  return (
    <SmoothScrolling>
      <div className="bg-black min-h-screen text-white">
        {/* Navigation */}
        <div className="relative z-50">
          <CardNav
            logoAlt="Company Logo"
            menuColor="#fff"
            buttonBgColor="#111"
            buttonTextColor="#fff"
            ease="power3.out"
          />
        </div>

        {/* Hero Section */}
        <div className="w-full px-6 py-32 lg:px-20 xl:px-28 2xl:px-32">
          {/* Small title / Category */}
          <div className="mb-8">
            <p className="text-gray-400 text-sm lg:text-base tracking-wider">
              <Link to="/">home</Link> / <Link to="/works">works</Link>
            </p>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8">
            {work.title}
          </h1>

          {/* Project Links - Added here */}
          {work.links && (
            <div className="flex flex-wrap gap-4 mb-12">
              {/* Demo Link */}
              {work.links.demo && (
                <a
                  href={
                    work.links.demo.isActive ? work.links.demo.url : undefined
                  }
                  target={work.links.demo.isActive ? "_blank" : undefined}
                  rel={
                    work.links.demo.isActive ? "noopener noreferrer" : undefined
                  }
                  className={`
                    group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg
                    backdrop-blur-md bg-white/5 border border-white/10
                    transition-all duration-300
                    ${
                      work.links.demo.isActive
                        ? "hover:bg-white/10 hover:border-white/20 cursor-pointer"
                        : "opacity-60 cursor-not-allowed"
                    }
                  `}
                >
                  {work.links.demo.isActive ? (
                    <>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span className="font-medium">Live Website</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4" />
                      <span className="font-medium">Demo (Shutdown)</span>
                    </>
                  )}

                  {/* Glassmorphism hover effect */}
                  {work.links.demo.isActive && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  )}
                </a>
              )}

              {/* Repository Link */}
              {work.links.repository && (
                <a
                  href={
                    work.links.repository.isPublic
                      ? work.links.repository.url
                      : undefined
                  }
                  target={work.links.repository.isPublic ? "_blank" : undefined}
                  rel={
                    work.links.repository.isPublic
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`
                    group relative inline-flex items-center gap-2 px-6 py-3 rounded-lg
                    backdrop-blur-md bg-white/5 border border-white/10
                    transition-all duration-300
                    ${
                      work.links.repository.isPublic
                        ? "hover:bg-white/10 hover:border-white/20 cursor-pointer"
                        : "opacity-60 cursor-not-allowed"
                    }
                  `}
                >
                  {work.links.repository.isPublic ? (
                    <>
                      <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span className="font-medium">Repository</span>
                    </>
                  ) : (
                    <>
                      <Lock className="w-4 h-4" />
                      <span className="font-medium">Repository (Private)</span>
                    </>
                  )}

                  {/* Glassmorphism hover effect */}
                  {work.links.repository.isPublic && (
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  )}
                </a>
              )}
            </div>
          )}

          {/* Featured Image/Video */}
          {work.content.images && work.content.images[0] && (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-16">
              <img
                src={work.content.images[0]}
                alt={work.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Description */}
          <div className="max-w-4xl">
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-12">
              {work.description}
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-20 mt-20">
            {/* Overview */}
            {work.content.overview && (
              <section>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Overview
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-4xl">
                  {work.content.overview}
                </p>
              </section>
            )}

            {/* Technologies */}
            {work.content.technologies &&
              work.content.technologies.length > 0 && (
                <section>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Technologies
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {work.content.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-6 py-3 bg-white/10 rounded-full text-base lg:text-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>
              )}
          </div>
        </div>

        <Footer />
      </div>
    </SmoothScrolling>
  );
};

export default WorkDetail;
