import { IData } from '../types';

const data: IData = {
  data: {
    personalDetails: {
      name: 'Meshvi Shah',
      profile: 'Full-Stack Developer',
      about:
        'Detail-oriented and results-driven Full Stack Developer with experience in building scalable, high-performance web applications using Node.js, React.js, Angular, and TypeScript. Skilled in backend architecture, frontend development, and cloud deployment. Passionate about problem-solving and creating digital products that drive business growth.',
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
        {
          name: 'Taxshila,Prantij',
          courseTag: 'Science',
          course: '11-12th',
          year: {
            start: 2017,
            end: 2019,
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
            'Developed and maintained RESTful APIs using Node.js and TypeScript, ensuring scalability and robustness,Built responsive, modular interfaces using React.js and AngularJS, improving user experience across web apps,Participated in the full development cycle including feature planning, implementation, testing, and deployment.',
          duration: 'Running',
          year: {
            start: 2023,
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
          name: 'Freelancer',
          position: 'Freelancer',
          description:
            'Delivered custom web solutions for multiple clients.Developed end-to-end applications using React.js, Node.js, MongoDB,Mysql, and PostgreSQL,Deployed solutions on AWS EC2, managed static/media assets via AWS S3, and ensured secure authentication systems,Communicated directly with clients to gather requirements, provide technical guidance, and meet deadlines.',
          duration: 'Ongoing',
          year: {
            start: 2022,
            end: 0,
          },
        },
        {
          name: 'FutureBeeAI',
          position: 'Web developer',
          description: 'Led backend development using Node.js and MongoDB.',
          duration: '6 Months',
          year: {
            start: 2022,
            end: 2022,
          },
        },
      
      ],
    },

    personalProjects: {
      tagLine: '{{codding}} is belong from Array.hobbies',
      projects: [
         {
           name: 'Residential Automation System',
          stack: 'MERN Stack',
          description:
            ['Designed and developed a digital automation system for residential societies, onboarding societies into the platform.',
              'Created an admin panel for society admins to manage users, visitors, maintenance, committees, and internal operations.',
              'Developed a mobile app interface allowing residents to make payments, book amenities, and control smart devices like AC, lights, and appliances.',
              'Ensured real-time data synchronization, secure access, and a seamless user experience across devices.'],
           //link: 'https://portal-frontend-huos.onrender.com',
          year: 2025,
          status: 1,
        },
        {
           name: 'Access MedLab(Healthcare Platform)',
          stack: 'Frontend Developer(Angular)',
          description: [
    'Developed user-friendly interfaces for a healthcare platform',
    'Enabled medical test bookings, payments, and account management',
    'Implemented dynamic data tables and modals',
    'Created form validations for data integrity',
    'Optimized Angular components for better performance'
  ],
           //link: 'https://portal-frontend-huos.onrender.com',
          year: 2024,
          status: 1,
        },
       {
          name: 'Finance Portal',
          stack: 'MERN stack',
         description: [
    'Developed a Client Analytics Portal using Node.js, React.js, and AWS',
    'Created dynamic platform for clients to access tailored analytics and reports',
    'Implemented interactive graphs and data visualizations',
    'Added user-defined filters for customized report generation',
    'Integrated calendar functionality for in-depth trend analysis',
    'Developed export functionality to Excel with embedded formulas',
    'Optimized the platform for seamless data analysis workflows'
  ],
           //link: 'https://portal-frontend-huos.onrender.com',
          year: 2023,
          status: 1,
        },
        {
          name: 'Mock Studio',
          stack: 'React Js',
          description:
            ['The web app can generate Safari-style mock screenshots from uploaded image.'],
          link: 'https://mockly.onrender.com',
          year: 2023,
          status: 1,
        },
        {
          name: 'PieNest',
          stack: 'Backend',
          description:
            ['Collaborated on developing an innovative Android application that empowers users to conveniently search for properties and various services, including cleaning, food delivery, and transportation.'],
          // link: 'https://github.com/MeshviShah/FinancialERP',
          year: 2023,
          status: 1,
        },
        {
          name: 'Financial ERP',
          stack: 'MERN Stack',
          description:
            ['Built a platform for selling curated datasets to AI/ML firms using React, Node.js, MongoDB, and Google Analytics.'],
          link: 'https://github.com/MeshviShah/FinancialERP',
          year: 2023,
          status: 1,
        },
        {
          name: 'DataStore',
          stack: 'MERN Stack',
          description: ['Built a platform for selling curated datasets to AI/ML firms using React, Node.js, MongoDB, and Google Analytics.'],
          year: 2022,
          status: 1,
        },
        {
          name: 'Food Application',
          stack: 'MEAN Stack',
          description:
            ['In this Web application user can see blogs related food Recipes, contact us and get email related Recipes.user can watch different different recipes.'],
          year: 2023,
          status: 0,
        },
      ],
    },

    techSkill: {
      frontEnd: ['React','Next.JS','Angular'],
   
      backEnd: ['Node.js', 'koa','Express'],
      database: ['Postgres', 'MongoDB','MySql'],
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
        link: 'tel:917383037983',
      },
      {
        platform: 'Email',
        text: 'shahmeshvi1011@gmail.com',
        link: 'mailto:shahmeshvi1011@gmail.com',
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
