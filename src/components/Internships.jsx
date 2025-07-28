import React from 'react';
import styles from './Internships.module.css';

const internships = [
  {
    title: 'Python',
    description: 'Gain hands-on experience with Python programming, automation, and scripting projects.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/800px-Python.svg.png',
  },
  {
    title: 'Machine Learning (ML)',
    description: 'Work on supervised and unsupervised machine learning projects and real-world data.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGVOa5sdRjCfabLSan-qUzXHH4PQNUWH3HQ&s',
  },
  {
    title: 'Deep Learning (DL)',
    description: 'Develop neural networks and work with cutting-edge deep learning frameworks.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKdriOP-7XAzewiviHl2xDtHtv0lZRm_D80g&s',
  },
  {
    title: 'Data Science',
    description: 'Analyze and visualize data, create models, and produce actionable insights.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST5xc5hhy993K1s72KxIhTkpOfBEh5D0SFIw&s',
  },
  {
    title: 'Cybersecurity',
    description: 'Learn about security fundamentals, threat detection, and practical defense techniques.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWALThJ2eTv35sssAD5CDabKcLZJYMomYF_g&s',
  },
  {
    title: 'Full Stack Development',
    description: 'Gain experience in front-end and back-end web development.',
    image: 'https://images-platform.99static.com/FWvZUrBBgg_FQbdXlquX0lf2KSI=/500x500/top/smart/99designs-contests-attachments/28/28801/attachment_28801044',
  },
  {
    title: 'Web Development',
    description: 'Design and deploy responsive websites using modern tech.',
    image: 'https://miro.medium.com/v2/resize:fit:1200/1*V-Jp13LvtVc2IiY2fp4qYw.jpeg',
  },
  {
    title: 'App Development',
    description: 'Build and test mobile apps for Android/iOS.',
    image: 'https://bairesdev.mo.cloudinary.net/blog/2023/10/Steps-of-Mobile-App-Development.jpg?tx=w_1920,q_auto',
  },
  {
    title: 'C',
    description: 'Learn programming and problem-solving with C.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
  },
  {
    title: 'Java',
    description: 'Object-oriented programming and Java frameworks.',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg',
  },
  {
    title: 'Data Visualization',
    description: 'Create charts with Matplotlib, Seaborn or D3.js.',
    image: 'https://cdn-icons-png.flaticon.com/512/10397/10397103.png',
  },
];

const handleApply = (title) => {
  alert(`Apply for ${title} - This can link to a form or page.`);
};

const Internships = () => (
  <section id="internships" className={styles.internships}>
    <div className={styles.container}>
      <h2>Explore Our Internship Opportunities</h2>
      <div className={styles.list}>
        {internships.map((i) => (
          <div className={styles.card} key={i.title}>
            <img src={i.image} alt={i.title} className={styles.image} />
            <h3>{i.title}</h3>
            <p>{i.description}</p>
            <button
              className={styles.applyBtn}
              onClick={() => handleApply(i.title)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Internships;