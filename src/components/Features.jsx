import React from 'react';
import styles from './Features.module.css';

const features = [
  {
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoEE4zrmVOhfqNiRUG1JbJo7UFdL_56zYp-A&s',
    title: 'Flexible Learning',
    description: 'Access courses and resources anytime, anywhere to fit your schedule.',
  },
  {
    icon: 'https://media.licdn.com/dms/image/v2/C4E12AQEmRszfIQkHQg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1560422553902?e=2147483647&v=beta&t=E9_jrcS_VZQ_bMoKGTWv3hw67w-qMsS3ezfhwYR1C6k',
    title: 'Real-World Internships',
    description: 'Gain hands-on experience with our industry-focused internship programs.',
  },
  {
    icon: 'https://www.techforceacademy.com/wp-content/uploads/2023/07/Becoming-a-mentor.png',
    title: 'Expert Mentorship',
    description: 'Get guidance from experienced mentors to accelerate your learning journey.',
  },
  {
    icon: 'https://aaftonline.com/blog/wp-content/uploads/2023/02/certification-courses-in-india.jpg',
    title: 'Certifications',
    description: 'Earn valuable certificates to showcase your skills and achievements.',
  },
];

const Features = () => (
  <section id="features" className={styles.features}>
    <div className="container">
      <h2>Our Features</h2>
      <div className={styles.grid}>
        {features.map(f => (
          <div className={styles.card} key={f.title}>
            <img src={f.icon} alt={f.title} className={styles.icon} />
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
