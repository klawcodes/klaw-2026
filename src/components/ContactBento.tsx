import React from "react";
import { Mail, Github, Instagram } from "lucide-react";

export default function ContactBento() {
  const contacts = [
    {
      icon: <Mail className="w-8 h-8" />,
      label: "Email",
      value: "meet@sumpahmati.men",
      href: "mailto:meet@sumpahmati.men",
      color: "from-red-500/20 to-orange-500/20",
      hoverColor: "hover:border-orange-500/50",
    },
    {
      icon: <Github className="w-7 h-7" />,
      label: "GitHub",
      value: "@klawcodes",
      href: "https://github.com/klawcodes",
      color: "from-gray-500/20 to-slate-600/20",
      hoverColor: "hover:border-slate-500/50",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@riotrevenger",
      href: "https://instagram.com/riotrevenger",
      color: "from-pink-500/20 to-purple-500/20",
      hoverColor: "hover:border-pink-500/50",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram",
      value: "@misplacestudio",
      href: "https://instagram.com/misplacestudio",
      color: "from-purple-500/20 to-fuchsia-500/20",
      hoverColor: "hover:border-purple-500/50",
    },
  ];

  return (
    <div className="w-full mt-12">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
        {/* Email - Large (spans 2 columns, 2 rows) */}
        <a
          href={contacts[0].href}
          className={`group md:col-span-2 md:row-span-2 bg-gradient-to-br ${contacts[0].color} backdrop-blur-md border border-white/10 ${contacts[0].hoverColor} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/20`}
        >
          <div className="flex items-start justify-between">
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              {contacts[0].icon}
            </div>
            <svg
              className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">{contacts[0].label}</p>
            <p className="text-xl font-semibold">{contacts[0].value}</p>
          </div>
        </a>

        {/* GitHub - Medium (spans 2 columns) */}
        <a
          href={contacts[1].href}
          className={`group md:col-span-2 bg-gradient-to-br ${contacts[1].color} backdrop-blur-md border border-white/10 ${contacts[1].hoverColor} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-slate-500/20`}
        >
          <div className="flex items-start justify-between">
            <div className="p-3 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              {contacts[1].icon}
            </div>
            <svg
              className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">{contacts[1].label}</p>
            <p className="text-lg font-semibold">{contacts[1].value}</p>
          </div>
        </a>

        {/* Instagram 1 - Small */}
        <a
          href={contacts[2].href}
          className={`group bg-gradient-to-br ${contacts[2].color} backdrop-blur-md border border-white/10 ${contacts[2].hoverColor} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-pink-500/20`}
        >
          <div className="flex items-start justify-between">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              {contacts[2].icon}
            </div>
            <svg
              className="w-4 h-4 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs text-white/60 mb-1">{contacts[2].label}</p>
            <p className="text-sm font-semibold">{contacts[2].value}</p>
          </div>
        </a>

        {/* Instagram 2 - Small */}
        <a
          href={contacts[3].href}
          className={`group bg-gradient-to-br ${contacts[3].color} backdrop-blur-md border border-white/10 ${contacts[3].hoverColor} rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20`}
        >
          <div className="flex items-start justify-between">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              {contacts[3].icon}
            </div>
            <svg
              className="w-4 h-4 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </div>
          <div>
            <p className="text-xs text-white/60 mb-1">{contacts[3].label}</p>
            <p className="text-sm font-semibold">{contacts[3].value}</p>
          </div>
        </a>
      </div>
    </div>
  );
}
