import React from 'react';
import styles from './About.module.css';

const aboutMotto = [
  "Empower learners to bridge the gap between education and industry.",
  "Deliver real-world experience through internships and projects.",
  "Foster a community of lifelong learners and professionals.",
  "Support career growth with mentorship and practical resources."
];

const aboutFeatures = [
  {
    img: "https://assets.entrepreneur.com/content/3x2/2000/1706012038-Shutterstock-2104258202.jpg",
    title: "Expert Mentorship",
    desc: "Guidance from professionals ensures practical learning and career confidence."
  },
  {
    img: "https://static-bestcolleges.tosshub.com/2023/News/U0DO5fTgST3t7Cub5Tb4HaHc9nTmm0f7dJKTLyKL.webp",
    title: "Hands-on Internships",
    desc: "Work on real projects with leading companies and gain industry exposure."
  },
  {
    img: "https://s3-mittlag-prod.innocode.dev/production/uploads/image/image/691675/article_img_1611740653302.jpg",
    title: "Active Community",
    desc: "Connect with peers, mentors, and recruiters for motivation and growth."
  },
  {
    img: "https://www.realvnc.com/wp-content/uploads/2022/03/Career-progression.jpg",
    title: "Career Support",
    desc: "Get resume reviews, interview prep, and soft skill development."
  },
  {
    img: "https://cdn-rdstaticassets.readdle.com/readdle/Blog/how-to-stay-focused-work-better/how-to-stay-focused-work-better-work-desk-home-area.jpg",
    title: "Job-Focused Courses",
    desc: "Courses designed with employers to ensure job-ready skills."
  },
  {
    img: "https://www.globalaccess.com/wp-content/uploads/2024/02/about-mobile-image.jpg",
    title: "Global Access",
    desc: "Learn from anywhere, anytime, with a platform built for everyone."
  },
  // Add more cards as desired
];

const About = () => (
  <section id="about" className={styles.about}>
    <div className="container">
      <h2>About On Duty Learning</h2>
      <div className={styles.mottoSection}>
        <h3 className={styles.mottoTitle}>Our Motto</h3>
        <ul className={styles.mottoList}>
          {aboutMotto.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
      </div>
      <div className={styles.scrollWrapper}>
        <div className={styles.featuresRow}>
          {aboutFeatures.map(({ img, title, desc }) => (
            <div className={styles.featureCard} key={title}>
              <img src={img} alt={title} className={styles.featureImg} />
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;