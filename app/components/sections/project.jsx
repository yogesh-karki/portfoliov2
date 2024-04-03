import Card from "./card";

const data = [
  {
    image: "/14peaks.png",
    title: "14 Peaks Expedition",
    link: "/",
    text: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tags: ["React", "Inertia.js", "GSAP", "SCSS"],
  },
  {
    image: "/aamakoachar.png",
    title: "Aama ko Achar",
    link: "/",
    text: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    tags: ["React", "Redux", "SCSS", "GSAP"],
  },
  {
    image: "/dlfgreens.png",
    title: "DLF Greens",
    link: "/",
    text: "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
    tags: ["HTML & SCSS", "JavaScript", "Figma"],
  },
  {
    image: "/projectcap.png",
    title: "Project Cap",
    link: "",
    text: "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    tags: ["Next.js", "Mapbox", "Highchart.js"],
  },
  {
    image: "/bhokmandu.png",
    title: "Bhokmandu",
    link: "",
    text: "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    tags: ["HTML & CSS", "Javascript", "jQuery", "Ajax", "Laravel"],
  },
  {
    image: "/sherpakhangri.png",
    title: "Sherpa Khangri",
    link: "",
    text: "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    tags: ["HTML & CSS", "PHP", "Photoshop"],
  },
];
const Project = () => {
  return (
    <div>
      {data.map((val, index) => {
        return <Card data={val} key={index} />;
      })}
    </div>
  );
};

export default Project;
