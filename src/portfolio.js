/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ramya's Portfolio",
  description:
    "Data scientist by skill, Engineer of intelligent solutions, Innovator by nature—always exploring the art of problem-solving. ",
  og: {
    title: "Ramya Chowdary Patchala Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Ramya Chowdary Patchala",
  logo_name: "RamyaPatchala",
  nickname: "",
  subTitle:
    "Data scientist by skill, Engineer of intelligent solutions, Innovator by nature—always exploring the art of problem-solving.",
  resumeLink:
    "https://drive.google.com/file/d/1viBOSpYOSHiDZ7h8rZsiAeY_2hDr2Lak/",
  portfolio_repository: "https://github.com/ramyacp14/portfolio",
  githubProfile: "https://github.com/ramyacp14",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ramyacp14",
  // linkedin: "https://www.linkedin.com/in/ramya-chowdary-patchala-85b420132/",
  // gmail: "ramyacp14@gmail.com"

  {
    name: "Github",
    link: "https://github.com/ramyacp14",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ramya-chowdary-patchala-85b420132/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:ramyacp14@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },

];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Large Language Models and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
        {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP, AWS and Azure",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};


const degrees = {
  degrees: [
    {
      title: "Syracuse University",
      subtitle: "M.S in Applied Data Science",
      logo_path: "syracuse-university-logo.png",
      alt_name: "Syracuse University",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have taken various courses related to Data Science and Artificial Intelligence like Applied Machine Learning, Natural Language Processing, Data Warehouse.",
        "⚡ I have used advanced techniques for developing generative AI applications in streamlit by integrating LLM's like GPT-4O, Claude, Cohere, Mistral, Gemini.",
        "⚡ Expertly navigated prompt engineering, crafted innovative conversational agents, and implemented retrieval-augmented generation (RAG) techniques to enhance application capabilities.",      ],
      website_link: "https://www.syracuse.edu",
    },
    {
      title: "Jawaharlal Nehru Technological University, Kakinada",
      subtitle: "B.Tech in Computer Science and Engineering",
      logo_path: "jntuk_logo.png",
      alt_name: "JNTUK",
      duration: "2015 - 2019",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.jntuk.edu.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving companies as Data Scientist and Data Engineer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Analyst",
          company: "Syracuse University",
          company_url: "https://case.syr.edu/",
          logo_path: "syracuse-university-logo.png",
          duration: "May 2024 - Aug 2024",
          location: "Syracuse, NY, USA",
          description:
            "Developed and deployed websites by leveraging web scraping techniques (Python, BeautifulSoup) to extract and integrate data from client sites. Collaborated with cross-functional teams to track project progress using Excel, ensuring alignment with stakeholder requirements and accurate data management.",
          color: "#000000",
        },
        {
          title: "Data Scientist",
          company: "SG Analytics",
          company_url: "https://www.sganalytics.com/",
          logo_path: "sg_analytics_logo.jpg",
          duration: "Sep 2022 - Aug 2023",
          location: "Hyderabad, India",
          description:
            "Developed a name-matching engine for NBC Universal using Machine Learning and NLP, and built applications in Retool with JavaScript and SQL for syncing data across Peacock, Nielsen, and IMDb. Designed data pipelines in Databricks (PySpark, Python) and migrated Retool apps from AWS DynamoDB to Snowflake for improved performance.",
          color: "#0879bf",
        },
        {
          title: "Data Engineer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_logo.png",
          duration: "July 2019 - Sep 2022",
          location: "Hyderabad, India",
          description:
            "Maintained a data pipeline using Apache Spark, BigQuery, and Google Cloud Storage for continuous data collection from Western Union's sources. Built automated ETL pipelines with Google Cloud Dataflow and Data Catalog, and integrated Tableau with GCP for seamless data connectivity and real-time updates.",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Project Outreach Intern",
          company: "AP Janmabhoomi",
          company_url: "https://in.linkedin.com/company/apjanmabhoomi",
          logo_path: "ap_janma.jpg",
          duration: "Feb 2018 - March 2018",
          location: "Guntur, India",
          description:
            "Develop strategies to boost contributions and recruit sponsors, participants, or volunteers for fundraising events. Conduct research on potential donors, investors, and donor markets to gather insights on their goals, net worth, and charitable history",
          color: "#4285F4",
        },
        {
          title: "Digital Literacy Intern",
         company: "AP Janmabhoomi",
          company_url: "https://in.linkedin.com/company/apjanmabhoomi",
          logo_path: "ap_janma.jpg",
          duration: "Dec 2017 - Jan 2018",
          location: "Guntur, India",
          description:
            "Teach courses and conduct information sessions for government school teachers on computer technologies and digital literacy, aiming to enhance their skills and integrate these technologies into their teaching practices.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "Projects_top.png",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactme.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Syracuse, NY - 13210",
    locality: "Syracuse",
    country: "USA",
    region: "New York",
    postalCode: "13210",
    avatar_image_path: "address_image.svg",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
