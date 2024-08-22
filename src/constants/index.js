import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    digpatgh,
    gds,
    dezi,
    nitd,
    java,
    aple,
    fauna,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "IoT",
      icon: backend,
    },

  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Front-End Developer",
      company_name: "Digital Pathshala",
      icon: digpatgh,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Setting up the Payment integration gateway",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing analysis to team for product development.",
      ],
    },
    {
      title: "Content & Design Lead",
      company_name: "GDSC BCREC",
      icon: gds,
      iconBg: "#E6DEDD",
      date: "June 2023 - June 2024",
      points: [
        "Conducted Events within the college including departmental and non-departmental students",
        "Built a work-flow plan for the entire session",
        "Managed over 2000 students and professionals during events technical or non-technical",
        "Ran Google's Cloud, Android, ML study jams along with live sessions"
      ],
    },
    {
      title: "Secretary",
      company_name: "DEZINOVA",
      icon: dezi,
      iconBg: "#383E56",
      date: "August 2023 - August 2024",
      points: [
        "Conducted Events within the college including departmental and non-departmental students",
        "Built a work-flow plan for the entire session",
        "Managed over 300 students during events",
        
      ],
    },
    {
      title: "Robotics & IoT Trainee",
      company_name: "NIT Durgapur",
      icon: nitd,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - May 2023",
      points: [
        "Developed IoT bot using Arduino , C++",
        "Collaborating with NIT-Dgp ROBOCELL members and worked upon making the bot",
        "Implementing and Automating the bot to make it unmanned",
        "Used ML-Models and advanced robotics technique to integrate a Robotic arm which can collect and test soil",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "RANK 1 at 'GeoHack'24' International Hackathon at IIIT Bhubaneswar, GRSS Kolkata, ISI Kolkata ",
       company: "IIIT Bhubaneswar",
      image: "https://d2lk14jtvqry1q.cloudfront.net/media/large_220_90558cff0e_35a1e5b696.png",
    },
    {
      testimonial:
        "RANK 1 at 'ON SPOT HACKATHON 2023' at NIT Durgapur  ",
      // name: "Chris Brown",
      // designation: "COO",
      company: "NIT Durgapur",
      image: "https://noticebard.com/wp-content/uploads/2022/08/NITDGP-9.png",
    },
    {
      testimonial:
        "RANK 1 at 'Bug Byte League'Hackathon at Delhi University",
      // name: "Lisa Wang",
      // designation: "CTO",
      company: "Delhi University",
      image: "https://w7.pngwing.com/pngs/103/517/png-transparent-faculty-of-law-university-of-delhi-deen-dayal-upadhyaya-college-school-of-open-learning-others-purple-logo-university-thumbnail.png",
    },
    {
      testimonial:
        "RANK 1 at 'Innofusion-Expo' Hackathon at Dr. B.C. Roy Enginnering College, Durgapur",
      // name: "Lisa Wang",
      // designation: "CTO",
      company: "BCREC, Durgapur",
      image: "https://w7.pngwing.com/pngs/761/46/png-transparent-dr-b-c-roy-engineering-college-durgapur-bengal-college-of-engineering-technology-national-institute-of-technology-durgapur-others.png",
    },
  ];
  
  const projects = [
    {
      name: "Apple UI",
      description:
        "Re-created Apple iPhone 15's UI page using Reactjs, Threejs, Tailwind CSS, and used GSAP to use out of the box animations and transitions",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "grey-text-gradient",
        },
        {
          name: "GSAP",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "blue-text-gradient",
        },
      ],
      image: aple,
      source_code_link: "https://github.com/GeekAvi007/Apple_UI",
    },
    {
      name: "Fauna Care",
      description:
        "Web application that enables cattle bearers to diagonise their cattle's diseases and consult doctor and seek medical assitance immediately ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "React-Router",
          color: "green-text-gradient",
        },
        {
          name: "Appwrite",
          color: "pink-text-gradient",
        },
      ],
      image: fauna,
      source_code_link: "https://github.com/GeekAvi007/funna-care",
    },
 
  ];
  
  export { services, technologies, experiences, testimonials, projects };