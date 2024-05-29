"use client";

import { useEffect, useRef } from "react";

import { Container, Grid } from "@mui/material";
import styles from "./styles/page.module.scss";

import { Experience, Bio, Project } from "@/app/components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import Mask from "./hook/mask";

export default function Home() {
  const bioBoxRef = useRef(null);
  const experienceBoxRef = useRef(null);
  const projectBoxRef = useRef(null);

  const bioNavRef = useRef(null);
  const experienceNavRef = useRef(null);
  const projectNavRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const gsapCtx = gsap.context(() => {
      gsap.to("#fixSection", {
        scrollTrigger: {
          trigger: "#container",
          start: "top top",
          pin: "#fixSection",
          pinSpacing: false,
          endTrigger: "#container",
          end: "bottom bottom",
        },
      });

      const createScrollTrigger = (boxRef, navRef) => {
        gsap.to(boxRef.current, {
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top center",
            end: "bottom center",
            onEnter: () => navRef.current.classList.add(styles.active),
            onEnterBack: () => navRef.current.classList.add(styles.active),
            onLeave: () => navRef.current.classList.remove(styles.active),
            onLeaveBack: () => navRef.current.classList.remove(styles.active),
          },
        });
      };

      createScrollTrigger(bioBoxRef, bioNavRef);
      createScrollTrigger(experienceBoxRef, experienceNavRef);
      createScrollTrigger(projectBoxRef, projectNavRef);

      ScrollTrigger.refresh();
    });

    if (window.innerWidth < 600) {
      gsapCtx.revert();
    }
    return () => gsapCtx.revert();
  });

  return (
    <main id="container" className="main">
      <Mask />
      <Container maxWidth={"lg"}>
        <Grid container>
          <Grid item md={6}>
            <div className={styles.left_side} id="fixSection">
              <div>
                <div className={styles.head_component}>
                  <h1>Yogesh Karki</h1>
                  <h2>Frontend Engineer</h2>
                  <p>
                    I transform ideas into visually stunning and interactive web
                    experiences.
                  </p>
                </div>

                <div className={styles.navs}>
                  <a href="#bio" ref={bioNavRef}>
                    ABOUT
                  </a>
                  <a href="#experience" ref={experienceNavRef}>
                    EXPERIENCE
                  </a>
                  <a href="#project" ref={projectNavRef}>
                    PROJECTS
                  </a>
                </div>
              </div>

              <div className={styles.social}>
                <a href="https://github.com/yogesh-karki/" target="_blank">
                  <GitHubIcon />
                </a>

                <a
                  href="https://www.linkedin.com/in/karkiyogesh/"
                  target="_blank"
                >
                  <LinkedInIcon />
                </a>

                <a
                  href="https://www.instagram.com/yogeshkarki73/"
                  target="_blank"
                >
                  <InstagramIcon />
                </a>

                <a href="mailto:kulchan.yogesh2@gmail.com" target="_blank">
                  <MailOutlineIcon />
                </a>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className={styles.right_side}>
              <div ref={bioBoxRef} id="bio">
                <Bio />
              </div>

              <div
                className={styles.experience}
                ref={experienceBoxRef}
                id="experience"
              >
                <Experience />
              </div>

              <div
                className={styles.project}
                ref={projectBoxRef}
                id={"project"}
              >
                <Project />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
