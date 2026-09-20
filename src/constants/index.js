import logo from "../assets/logo-aoi9t5cW.png";
import backend from "../assets/backend-eJbiv30d.png";
import creator from "../assets/creator-Kxn6XPAS.png";
import mobile from "../assets/mobile-nsCxKNJ2.png";
import web from "../assets/web-2Xs7v1YF.png";
import github from "../assets/github-IexgpGUD.png";
import css from "../assets/css-gLKK_hwV.png";
import docker from "../assets/docker-60Ckme38.png";
import figma from "../assets/figma-3Xqs7UmR.png";
import html from "../assets/html-P_XORoKv.png";
import javascript from "../assets/logo-aoi9t5cW.png"; // or direct icon
import mongodb from "../assets/mongodb-51PRC_bF.png";
import nodejs from "../assets/nodejs-cOREf0jI.png";
import redux from "../assets/redux-mW_zk5hm.png";
import tailwind from "../assets/tailwind-i0ent8iN.png";
import meta from "../assets/meta-wwPXefW1.png";
import shopify from "../assets/shopify-fb2A323g.png";
import starbucks from "../assets/starbucks-6YhUdmyp.png";
import carrent from "../assets/carrent-pIQZGY-L.png";
import jobit from "../assets/jobit-AV6VR03R.png";
import tripguide from "../assets/tripguide-P9tWthG6.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Discord Bot Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Open Source Developer",
    icon: creator,
  },
  {
    title: "Creative Developer",
    icon: backend,
  },
];

export const technologies = [
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "Node.js",
  },
  {
    name: "Discord.js",
  },
  {
    name: "Python",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Three.js",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Git / GitHub",
  },
  {
    name: "Docker",
  },
  {
    name: "HTML 5",
  },
  {
    name: "CSS 3",
  },
  {
    name: "Figma",
  },
];

export const experiences = [
  {
    title: "Discord Bot Development",
    company_name: "Automation & Concurrency",
    icon: mobile,
    iconBg: "#383E56",
    date: "Primary Specialization",
    points: [
      "Engineering resilient Discord automation architectures using Discord.js v14 and Node.js.",
      "Developing high-performance voice gateways and audio streaming playback queues.",
      "Designing responsive slash command hierarchies, interactive components, and permission systems.",
      "Collaborating with CODEx Development community on scalable bot infrastructure.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Frontend & Full-Stack Systems",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Modern Platforms",
    points: [
      "Crafting modern, reactive user interfaces with React, Next.js, and Tailwind CSS.",
      "Building seamless REST API endpoints, state synchronization, and database layers using MongoDB.",
      "Ensuring high performance, semantic accessibility, and cross-device responsiveness.",
    ],
  },
  {
    title: "Open Source Development",
    company_name: "GitHub Ecosystem & Community",
    icon: creator,
    iconBg: "#383E56",
    date: "Tooling & Collaboration",
    points: [
      "Publishing modular utility packages, boilerplates, and developer tools on GitHub (@MohsinAli088).",
      "Contributing to developer discussions and open-source Discord bot repositories.",
      "Mentoring and sharing knowledge inside the CODEx Development community.",
    ],
  },
  {
    title: "Creative 3D Development",
    company_name: "Spatial & WebGL",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Interactive Engineering",
    points: [
      "Creating immersive 3D web experiences using Three.js and React Three Fiber.",
      "Implementing real-time 3D lighting, procedural geometries, and physics-based orbital controls.",
      "Optimizing GLTF/GLB models and render pipelines for 60fps performance across desktop and mobile.",
    ],
  },
];

export const projects = [
  {
    name: "Sonic Wave",
    description:
      "A high-fidelity Discord music bot engineered for zero-latency audio streaming, intelligent queue orchestration, and seamless multi-server playback.",
    tags: [
      {
        name: "discord.js",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "audio-api",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MohsinAli088/",
  },
  {
    name: "Kreo Hub",
    description:
      "A modern developer platform unifying bot configurations, project environments, and developer resources within an intuitive, responsive interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/MohsinAli088/",
  },
  {
    name: "Bot Control",
    description:
      "An advanced administrative telemetry dashboard providing live server metrics, bot health monitoring, dynamic permission management, and remote command orchestration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/MohsinAli088/",
  },
  {
    name: "Open Source Lab",
    description:
      "A curated suite of open-source utilities, developer boilerplates, and Discord bot automation tools crafted to accelerate creative engineering workflows.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "github",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/MohsinAli088/",
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/MohsinAli088/",
  discord: "https://discord.gg/codexdevs",
  email: "mohsin.dev.contact@gmail.com",
};
