/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Thamer Alluwqmani",
  title: "Hi all, I'm Thamer",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Vuejs / PHP and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1GISkWv2tuaUMQM2woPXtJUJoLvwotK2Q/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ThamerAlluqmani",
  linkedin: "https://www.linkedin.com/in/thameralluqmani/",
  gmail: "thamer.allogmani@gmail.com",
  twitter: "https://twitter.com/thamer9900",
  stackoverflow: "https://stackoverflow.com/users/14841020/thamer-alluqmani",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
      schoolName: "Jubail University College",
      logo: require("./assets/images/JUC_LOGO.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2018 - Expected 2023",
      desc: "Leader of Cybersecurity Club and Member of Computer science Club",
      descBullets: ["Organized a CTF competition in the collage", "Presented an Introduction to Web Development in Computer science Club" , "Presented an Introduction to CTF competition in Cybersecurity club"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full-stack web Developer",
      company: "Shaguf E-learning platform",
      companylogo: require("./assets/images/1625002574550.jfif"),
      date: "Mars 2022 – Present",
      desc: "Responsible for implementing visual and interactive elements that users engage with through the platform using HTML5, CSS3, JQuery and Bootstrap 5",
    },
    {
      role: "Full-stack web Developer Intern",
      company: "Tif Company",
      companylogo: require("./assets/images/TIF_LOGO.jpg"),
      date: "June 2021 – September 2021",
      desc: "Designed and built various websites using Vue.js, Laravel, MYSQL, JQuery and Bootstrap 5"
    },
    {
      role: "Web development manager",
      company: "SEMI",
      companylogo: require("./assets/images/Semi Avatar v0.2.jpg"),
      date: "Feb 2022 – Present",
      desc: "Responsible for delivering a full-service website, provide guidance on web issues, and lead a team of web developers and UI/UX designers."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/santiago.png"),
      projectName: "Santiago resturant",
      projectDesc: "Santiago resturant is a Front-end website that I built using Vue.js Framework. also, I used many technologies like SPA and PWA to make the app better",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://santiago-resturant.web.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/edhhah.jpg"),
      projectName: "Edhhah blog",
      projectDesc: "Edhhah is a blog I built using Vue.js framework as the front-end and firebase as the back-end. also, I used many technologies like SPA and PWA to make the app better",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://blog-5ef6b.web.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Web Fundamentals Learning path",
      subtitle:
        "Completed Certification from TryHackMe for understanding web application security.",
      image: require("./assets/images/the-ciacon.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1HAJ9IPDUBDFehnolGz8Tj9GB8IHztOXt/view?usp=sharing"
        }
      ]
    },
    {
      title: "Pre Security Learning Path",
      subtitle:
        "Completed Certification from TryHackMe for understanding the basics of Networking and Cyber security.",
      image: require("./assets/images/the-ciacon.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1hKJjWDy4GZ95YdI71fXxYU-I1BK2kdx-/view?usp=sharing"
        }
      ]
    },

    {
      title: "Vue.js Developer",
      subtitle:
        "Completed Certification from FlexCourses for Vue.js framework.",
      image: require("./assets/images/QlrKARXY_400x400.jpg"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1-SJ3nHib-u0OfwL3XppO9eBbF1XaH9NX/view?usp=sharing"
        }
      ]
    },


    {
      title: "Laravel Developer",
      subtitle: "Completed Certifcation from FlexCourses for Laravel framework.",
      image: require("./assets/images/QlrKARXY_400x400.jpg"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1LbMoI8_IGHK4tXePbQp4g4HCC5hx-U5B/view?usp=sharing"},
        {
          name: "Final Project",
          url: "https://github.com/ThamerAlluqmani/Byrgenwerth"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+966-531652858",
  email_address: "thamer.allogmani@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "thamer9900", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
