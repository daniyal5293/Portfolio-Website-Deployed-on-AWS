import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  multinet,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DevOps Engineer",
    icon: web,
  },
  {
    title: "AWS Specialist",
    icon: mobile,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  {
    title: "Automation Expert",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Kubernetes",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cloud Computing Intern",
    company_name: "Multinet",
    icon: multinet,
    iconBg: "#383E56",
    date: "13 Jul 2025 -26 Aug 2025",
    points: [
     "Monitoring large-scale cloud infrastructure to ensure high availability and optimal performance using enterprise monitoring tools.",
    "Gaining deep technical expertise in Linux administration, managing system configurations, and troubleshooting server-side issues.",
    "Assisting in the management of cloud resources, learning how data centers and private cloud environments are structured and maintained.",
    "Collaborating with senior network and systems engineers to understand cloud security protocols and resource allocation strategies.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Daniyal Is a fantastic DevOps Engineer who transformed our infrastructure with his expertise. His automation skills saved us countless hours.",
    name: "Unknown",
    designation: "---",
    company: "---",
    image: "",
  },
  {
    testimonial:
      "I've never worked with a DevOps Specialist so committed to developer productivity. He treats our deployment bottlenecks as his own, and his automation strategies have completely transformed how our team works.",
    name: "Unknown",
    designation: "---",
    company: "---",
    image: "-",
  },
  {
    testimonial:
      "After he optimized our CI/CD pipelines, our deployment frequency increased by 50%. We went from weekly releases to daily deployments without a single minute of downtime. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "",
  },
];

const projects = [
  {
    name: "Portfolio Deployment on AWS",
    description:
      "I deployed my personal portfolio website on AWS using EC2 for static website hosting, set Inbound 0.0.0.0 so anyone can access it, and configured a security group to allow HTTP and HTTPS traffic.",
    tags: [
      {
        name: "AWS",
        color: "blue-text-gradient",
      },
      {
        name: "EC2",
        color: "green-text-gradient",
      },
      {
        name: "portfolio",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/daniyal5293/Portfolio-Website-Deployed-on-AWS",
  },
  {
    name: "Email Assistant using Spring Boot",
    description:
      "Smart Email Assistant is a database-driven intelligent management system that aims to increase productivity, automate repetitive email chores, and improve communication quality. Built with Spring Boot, Spring AI, and frontend with reactjs. Chrome extension is also part of this project integrated on Gmail.",
    tags: [
      {
        name: "springboot",
        color: "blue-text-gradient",
      },
      {
        name: "chromeextension",
        color: "pink-text-gradient",
      },
      {
        name: "reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/daniyal5293/Email_Assistant_ChromeEXT-FullStackProject",
  },
  {
    name: "Full Stack Screen Recording & Video Sharing Platform",
    description:
      "Built with Next.js and Bunny.net, this Full Stack Screen Recording & Video Sharing Platform includes user authentication with \"Better Auth\", screen recording, video uploads, and the ability to share videos via link. Users can set videos as public or private, view AI-generated transcripts, and access metadata like video ID and URL. A built-in search bar makes finding content fast and simple.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "bunnynet",
        color: "green-text-gradient",
      },
      {
        name: "fullstack",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://www.linkedin.com/posts/daniyal-khan-706b542b7_arcjet-betterauth-drizzleorm-activity-7349769513493577729-wEp3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEwqp_YBbtn_NLscnQ8qOx1AKh1wvkg7Xok",
  },
];

export { services, technologies, experiences, testimonials, projects };
