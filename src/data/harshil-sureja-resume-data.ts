import { IData } from '../types';

const data: IData = {
  data: {
    personalDetails: {
      name: 'Meshvi Shah',
      profile: 'Full-Stack Developer',
      about:
        'As a dedicated developer,my unwavering passion for innovation drives me to excel in crafting digital solutions that transcend conventional boundaries. With a keen focus on problem-solving,I relish the opportunity to leverage cutting-edge technologies and ingenious strategies to propel businesses forward on the digital frontier.',
      profileImage: 'Meshvishah.png',
    },

    education: {
      colleges: [
        {
          name: 'Silver Oak College of Engineering And Technology, Ahmedabad',
          courseTag: 'BE',
          course: 'Computer Engineering',
          year: {
            start: 2019,
            end: 2023,
          },
        },
      ],
    },

    workExperience: {
      jobs: [
        {
          name: 'AllianceTek',
          position: 'Junior Software Developer',
          description:
            'Led backend development using Nodejs and Different database for a comprehensive tracking project,enhancing my proficiency in building scalable and efficient APIs.',
          duration: 'Running',
          year: {
            start: 2022,
            end: 0,
          },
        },
        {
          name: 'AllianceTek',
          position: 'Intern',
          description:
            'Pioneered the creation of a Financial ERP tool utilizing React, Node.js, and MongoDB, refining my abilities in developing dynamic and responsive web applications.',
          duration: '6 Months',
          year: {
            start: 2023,
            end: 2023,
          },
        },
        {
          name: 'FutureBeeAI',
          position: 'Web developer',
          description: 'Led backend development using Node.js and MongoDB.',
          duration: '6 Months',
          year: {
            start: 2023,
            end: 2023,
          },
        },
        {
          name: 'Freelancer',
          position: 'Freelancer',
          description:
            'Engaged in diverse client projects to expand my skill set, with a focus on mastering technologies such as Node.js, React.js, TypeScript, and databases like MongoDB and PostgreSQL, and cloud technology like AWS EC2,CI/CD demonstrating continuous learning and adaptability.',
          duration: 'Ongoing',
          year: {
            start: 2022,
            end: 0,
          },
        },
      ],
    },

    personalProjects: {
      tagLine: '{{codding}} is belong from Array.hobbies',
      projects: [
        {
          name: 'Mock Studio',
          stack: 'React Js',
          description:
            'The web app can generate Safari-style mock screenshots from uploaded image.',
          link: 'https://mockly.onrender.com',
          year: 2023,
          status: 1,
        },
        {
          name: 'Financial ERP',
          stack: 'MERN Stack',
          description:
            'Web app can manage task,client document and notifications related to payment.',
          link: 'https://github.com/MeshviShah/FinancialERP',
          year: 2023,
          status: 1,
        },
        {
          name: 'DataStore',
          stack: 'MERN Stack',
          description: 'Web app can  Provide Dataset for customer and Company.',
          year: 2022,
          status: 1,
        },
        {
          name: 'Food Application',
          stack: 'MEAN Stack',
          description:
            'In this Web application user can see blogs related food Recipes, contact us and get email related Recipes.user can watch different different recipes.',
          year: 2023,
          status: 0,
        },
      ],
    },

    techSkill: {
      frontEnd: ['React'],
      backEnd: ['Node.js', 'koa'],
      database: ['Postgres', 'MongoDB'],
    },

    otherSkill: {
      cloud: ['AWS', 'Supabase', 'CI/CD'],
      architecture: ['Monolithic', 'Microservice'],
    },

    languages: ['Gujarati', 'Hindi', 'English'],

    contactDetails: [
      {
        platform: 'Phone',
        text: '+91 7383037983',
        link: 'tel://917383037983',
      },
      {
        platform: 'Email',
        text: 'shahmeshvi1011@gmail.com',
        link: 'mailto://shahmeshvi1011@gmail.com',
      },
      {
        platform: 'LinkedIn',
        text: '@meshvi-shah',
        link: 'https://www.linkedin.com/in/meshvi-shah-93a877217',
      },
      {
        platform: 'Github',
        text: '@MeshviShah',
        link: 'https://github.com/MeshviShah',
      },
    ],
  },
};

export default data;
