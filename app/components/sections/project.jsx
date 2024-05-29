import Card from "./card";

const data = [
  {
    image: "/projectcap.png",
    title: "Project Cap",
    link: "https://projectcap.creasion.org/",
    text: "During my tenure at Keroneva Design, I contributed to the development of Project Cap, a dynamic web presence for our client, showcasing their brand effectively.",
    tags: ["Next.js", "Mapbox", "Highchart.js", "Web Portal"],
  },
  {
    image: "/greenshift.png",
    title: "GreenShift Nepal",
    link: "https://greenshift.creasion.org/",
    text: "At Keroneva Design, I played a key role in crafting the online presence of Green Shift Nepal, elevating our client's digital footprint.",
    tags: ["Next.js", "Mapbox", "Highchart.js", "GSAP", "SCSS", "Web Portal"],
  },
  {
    image: "/14peaks.png",
    title: "14 Peaks Expedition",
    link: "https://14peaksexpedition.com/",
    text: "My time at Hue Shine was marked by my involvement in 14 Peaks Expedition, an impactful endeavor amplifying our client's web presence in mountainnering and expedition market",
    tags: ["React", "Inertia.js", "GSAP", "SCSS"],
  },
  {
    image: "/aamakoachar.png",
    title: "Aama ko Achar",
    link: "https://aamakoachar.com/",
    text: "While at Hue Shine, I dedicated myself tothis project, molding it into a compelling representation of our client's identity on the web.",
    tags: ["React", "Redux", "SCSS", "GSAP"],
  },
  {
    image: "/dlfgreens.png",
    title: "DLF Greens",
    link: "https://dlfgreens.com.np/",
    text: "At Hue Shine, I played a key role in crafting in this project, meticulously sculpting the digital landscape for our esteemed client.",
    tags: ["HTML & SCSS", "JavaScript", "Figma"],
  },
  {
    image: "/bhokmandu.png",
    title: "Bhokmandu",
    link: "https://bhokmandu.com.np/",
    text: "At Keroneva Design, I contributed to the development of this web app Bhokmandu, an innovative online food delivery web application catering to our client's needs.",
    tags: ["HTML & CSS", "Javascript", "jQuery", "Ajax", "Laravel"],
  },
  {
    image: "/sherpakhangri.png",
    title: "Sherpa Khangri Outdoors",
    link: "https://sherpakhangri.com/",
    text: "During my tenure at Hue Shine, I contributed to the development of Sherpa Khagri Outdoors, a dynamic travel and tour application, serving as a captivating showcase of our client's brand identity and offerings.",
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
