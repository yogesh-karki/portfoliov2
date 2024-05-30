import Card from "./card";

const data = [
  {
    date: "2023 - PRESENT",
    title: "Frontend Engineer - Keroneva Design",
    link: "#",
    text: "Thrilled to share my journey at Keroneva Design, where I've been working since 2023, continuously expanding my knowledge and skills. Focusing on building and maintaining 2D interactive websites, I've sharpened my proficiency in JavaScript, TypeScript, React, Redux, Next.js, GSAP, and SCSS. Excited to continue pushing the boundaries of web development and exploring innovative ways to create immersive user experiences!",
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
    title: "Frontend Developer - Hue Shine Pvt Ltd",
    link: "#",
    text: "Excited to share my journey as a Frontend Developer at Hue Shine from 2021-2023! During my time there, I refined my expertise in JavaScript, React, Axios, HTML & SCSS, Laravel, WordPress, mySQL, and Git. Excited to continue growing and exploring new technologies in the ever-evolving world of web development!",
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
    date: "2019 - 2021",
    title: "Web Designer - Hue Shine Pvt Ltd",
    link: "#",
    text: "I worked as a web designer at Hue Shine from 2019 to 2021, where I honed my skills in HTML & CSS, jQuery, JavaScript, Figma, Photoshop, Illustrator, and Adobe XD. This role allowed me to develop a comprehensive skill set in both design and front-end development",
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
    title: " Web Designer - Kulchan Pvt Ltd",
    link: "",
    text: "Starting as an intern, I gained a strong foundation in website design and development. This experience ignited my passion for the field, leading me to pursue a dedicated career in website development.",
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
