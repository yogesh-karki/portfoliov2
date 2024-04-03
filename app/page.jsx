"use client";

import { useEffect } from "react";

import { Container, Grid } from "@mui/material";
import styles from "./styles/page.module.scss";

import { Experience, Bio, Project } from "@/app/components";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Home() {
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

      ScrollTrigger.refresh();
    });

    return () => gsapCtx.revert();
  });

  return (
    <main id="container">
      <Container maxWidth={"lg"}>
        <Grid container>
          <Grid item md={6}>
            <div className={styles.left_side} id="fixSection">
              <div>
                <div className={styles.head_component}>
                  <h1>Yogesh Karki</h1>
                  <h2>Frontend Engineer</h2>
                  <p>
                    I build pixel-perfect, engaging, and accessible digital
                    experiences.
                  </p>
                </div>

                <div className={styles.navs}>
                  <a href="" className={styles.active}>
                    ABOUT
                  </a>
                  <a href="">EXPERIENCE</a>
                  <a href="">PROJECTS</a>
                </div>
              </div>

              <div className={styles.social}>
                <a href="">
                  <GitHubIcon />
                </a>

                <a href="">
                  <LinkedInIcon />
                </a>

                <a href="">
                  <InstagramIcon />
                </a>

                <a href="">
                  <MailOutlineIcon />
                </a>
              </div>
            </div>
          </Grid>

          <Grid item md={6}>
            <div className={styles.right_side}>
              <Bio />

              <div className={styles.experience}>
                <Experience />
              </div>

              <div className={styles.project}>
                <Project />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}
