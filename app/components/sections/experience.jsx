import Card from "./card";

const data = [
  {
    date: "2023 - PRESENT",
    title: "Fronend Engineer - Keroneva Design",
    link: "/",
    text: "Build and maintain critical components used to construct Klaviyo’s frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
    tags: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "GSAP",
      "SCSS",
    ],
  },
  {
    date: "2021 - 2023",
    title: "Frontend Developer - Hue Shine",
    link: "/",
    text: "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.",
    tags: [
      "JavaScript",
      "React",
      "Axios",
      "HTML & SCSS",
      "Laravel",
      "Wordpress",
      "mySQL",
      "Git",
    ],
  },
  {
    date: "2019 - 2023",
    title: "UX/UI Designer - Hue Shine",
    link: "/",
    text: "Worked with the UI team to engineer and improve major features of Starry’s customer-facing Android app.",
    tags: [
      "HTML & CSS",
      "jQuery",
      "JavaScript",
      "Figma",
      "Photoshop",
      "Illustrator",
      "Adobe XD",
    ],
  },
  {
    date: "2018 - 2019",
    title: "Web Designer - Kulchan Pvt Ltd",
    link: "",
    text: "Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more.",
    tags: ["HTML & CSS", "PHP", "Photoshop"],
  },
];
const Experience = () => {
  return (
    <div>
      {data.map((val, index) => {
        return <Card data={val} key={index} />;
      })}
    </div>
  );
};

export default Experience;
