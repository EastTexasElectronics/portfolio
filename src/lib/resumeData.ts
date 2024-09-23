export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  details: string;
  story: string;
  shortDescription?: string;
  learned: string;
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  fieldOfStudy: string;
  achievements: string[];
  notableCourses: string;
}

export interface Skill {
  name: string;
  details: string;
  icon: string;
  applications: string[]; // New field
}

interface Project {
  name: string;
  description: string;
  link: string;
}

interface About {
  description: string;
  hobbies: string[];
}

interface ResumeData {
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: {
    technical: Skill[];
    management: Skill[];
    business: Skill[];
  };
  projects: Project[];
  about: About;
}

export const resumeData: ResumeData = {
  summary:
    "Versatile professional with 20+ years of experience, spanning software development, IT support, electronics repair, and culinary management. Proven track record in leadership, problem-solving, and delivering exceptional results. Expertise in full-stack development, hardware/software troubleshooting, and business operations. Passionate about leveraging diverse skills to drive innovation and efficiency in dynamic environments. Adept at combining technical acumen with strong interpersonal skills to foster team collaboration and client satisfaction.",
  experience: [
    {
      title: "Owner & Operator",
      company: "East Texas Electronics LLC. - Hallsville, TX",
      period: "2020 - Present",
      responsibilities: [
        "Provide IT support, electronics repair, and full-stack web development for local clients.",
        "Built and managed websites and software for clients.",
        "I was responsible for all aspects of the company and operated this business solo.",
        "Delivered exceptional customer service, enhancing client retention and referrals.",
      ],
      details:
        "As the owner of East Texas Electronics, I've had the opportunity to wear many hats and apply my diverse skill set. This role has allowed me to combine my technical expertise in software development and electronics repair with my business acumen. I've learned valuable lessons about entrepreneurship, client relations, and the importance of continuous learning in the fast-paced tech industry.",
      story:
        "One memorable experience was when an international cargo shipping company unexpectedly reached out about a broken-down ship 5 hours away. Unable to find local technicians for the soldering work, I made the journey and successfully repaired their circuit board. This saved them over $150,000 in penalties and delays. Subsequently, I became their go-to person for all electronics repair needs, showcasing my ability to adapt and provide critical solutions under pressure.",
      shortDescription:
        "Provide comprehensive IT support, electronics repair, and full-stack web & software development solutions while managing a thriving retail location.",
      learned:
        "Gained valuable insights into running a small business, improved problem-solving skills in IT and electronics, and enhanced my ability to manage client relationships effectively.",
    },
    {
      title: "Tutor",
      company: "Kenzie Academy - Indianapolis, IN (Remote)",
      period: "2020 - 2021",
      responsibilities: [
        "Mentored students in web development, helping them master clean code practices and full-stack technologies.",
        "Assisted students in problem-solving and developing proficiency in HTML/CSS, JavaScript, React, Python, Django, and other tools.",
      ],
      details:
        "Working as a tutor at Kenzie Academy was a rewarding experience that allowed me to share my knowledge and grown my own skills in software engineering. I worked with students from diverse backgrounds, helping them understand complex programming concepts and guiding them through their coding journey.",
      story:
        "I had a student who was struggling with all of their coursework, suffering from a severe case of imposter syndrome. We were working on the Tower of Hanoi project when suddenly she solved a complex component in one attempt. Watching her confidence grow as she started to master the material was incredible. By her last semester, she was tutoring other students. Her transformation from struggling learner to confident mentor was one of my proudest moments as an educator.",
      shortDescription:
        "Mentored students in software engineering questions and concepts. Assisting them along their journey to becoming a software engineer.",
      learned:
        "Developed strong communication skills, deepened my understanding of web development concepts, and learned effective teaching methodologies for technical subjects. Gained valuable experience in remote work, utilizing tools like Zoom, Slack, and Jira to effectively collaborate and manage student progress during the pandemic.",
    },
    {
      title: "Executive Sous Chef",
      company: "The 10th, Vail Resorts - Vail, CO",
      period: "2013 - 2017",
      responsibilities: [
        "Managed scheduling, inventory, and training for a team of 35+ kitchen staff.",
        "Trained employees in team management and self-awareness, improving overall team performance.",
        "Responsible for all aspects of back of house during executive chef's absence.",
        "Oversaw logistics of food and equipment transportation to the mountaintop restaurant.",
        "Implemented efficient waste management systems to address unique challenges of the location.",
        "Adapted menu and operations to accommodate high-altitude cooking requirements.",
      ],
      details:
        "As Executive Sous Chef at The 10th, I honed my leadership and management skills in a high-pressure, fast-paced environment. This role taught me the importance of clear communication, efficient processes, and team motivation. I managed a staff of over 35 employees and contributed to generating over $104 million in sales during my tenure. The experience of managing a large team and handling diverse responsibilities in a unique setting has proven invaluable in my transition to the tech industry.",
      story:
        "In 2015, our Executive Chef unexpectedly departed just before the winter season, right as we were starting the interview process for seasonal employees. Despite not having the experience or reputation to be the Executive Chef at that point in my career, I stepped up and took over the role's responsibilities. I acted as the Executive Chef until a replacement was found deep into the winter season. I successfully kept the kitchen running smoothly and maintained The 10th's high standards through the busiest time of the season - the Christmas/New Year holiday period. This experience taught me the value of preparation, adaptability, and trust in your team, skills that have proven invaluable in my transition to the tech industry.",
      shortDescription:
        "Managed a team of 35+ kitchen staff, oversaw back-of-house operations, and ensured smooth functioning of a high-volume, mountaintop fine dining restaurant.",
      learned:
        "Honed leadership skills in a high-pressure environment, improved inventory management techniques, and learned to effectively delegate tasks to maximize team efficiency.",
    },
    {
      title: "Owner & Operator",
      company: "Cluckin' Crazy LLC. - Austin, TX",
      period: "2011 - 2012",
      responsibilities: [
        "Owned and operated a food trailer specializing in gourmet chicken wings.",
        "Managed all aspects of the business including cooking, customer service, and sales.",
        "Developed unique flavor profiles and menu items to differentiate from competitors.",
        "Handled financial planning, budgeting, and inventory management.",
        "Coordinated participation in local events and festivals to increase brand visibility.",
      ],
      details:
        "As the sole operator of Cluckin' Crazy LLC., I was responsible for every aspect of the business, from cooking to customer service. This experience taught me valuable lessons in entrepreneurship and time management.",
      story:
        "My most memorable experience was being a vendor at the inaugural F1 race in Austin, TX. I sold through an entire 26ft trailer full of chicken wings, with a line out the door for most of the race. It was exhilarating to be part of such a large-scale event and see how my wings were enjoyed by so many people. This experience taught me valuable lessons about scaling operations for high-demand situations and maintaining quality under pressure - skills that have translated well into my tech career.",
      shortDescription:
        "Launched and operated an innovative food trailer business, creating unique chicken wing flavors that became a local favorite in Austin's competitive food scene.",
      learned:
        "Gained firsthand experience in entrepreneurship, learned the importance of adaptability in business, and improved my multitasking abilities.",
    },
    {
      title: "JR. Sous Chef",
      company: "Soliel - Austin, TX",
      period: "2010 - 2011",
      responsibilities: [
        "In charge of all prep work, ensuring everything was ready for the line to use.",
        "Prepared stocks, sauces, and cooked pasta.",
        "Managed inventory and placed orders for necessary ingredients.",
        "Assisted in menu development and recipe standardization.",
        "Trained and supervised prep cooks to maintain quality and efficiency.",
      ],
      details:
        "Working as a JR. Sous Chef at Soliel, a Mediterranean restaurant, I honed my culinary skills and learned the importance of preparation and organization in a high-paced kitchen environment.",
      story:
        "A highlight of my time at Soliel was preparing a tableside shellfish dinner for celebrities Danny Trejo and Jessica Alba. This experience not only showcased my culinary skills but also taught me about maintaining composure and delivering excellence under high-pressure situations - a skill that has proven invaluable in my tech career when dealing with critical projects or tight deadlines.",
      shortDescription:
        "Orchestrated all prep work, ensuring the kitchen line was fully stocked and ready for service, while contributing to menu development and staff training.",
      learned:
        "Developed strong organizational skills, learned the importance of preparation in a fast-paced kitchen environment, and improved my ability to work efficiently under pressure.",
    },
    {
      title: "Extern",
      company: "Colonial Country Club - Fort Worth, TX",
      period: "2008 - 2009",
      responsibilities: [
        "Moved around all F&B facilities and was present during the PGA tour.",
        "Participated in banquets, fine dining, casual dining, and large events.",
      ],
      details:
        "As an extern at Colonial Country Club, I gained experience in various aspects of food and beverage operations, from banquets to fine dining. This role provided a comprehensive understanding of large-scale event management.",
      story:
        "Being part of the PGA tour and witnessing the prestigious weddings and banquets at Colonial Country Club was an incredible experience. I learned from some of the best in the industry and gained valuable experience working in a high-paced, high-stakes environment. This experience honed my ability to maintain high standards and attention to detail under pressure, skills that have translated well into my software development career.",
      shortDescription:
        "Moved around all F&B facilities and was present during the PGA tour.",
      learned:
        "Gained exposure to various aspects of food and beverage operations, improved my ability to adapt to different work environments, and learned the importance of maintaining high standards in a prestigious setting.",
    },
    {
      title: "AM Assistant Manager",
      company: "Cold Stone Creamery - Arlington, TX",
      period: "2005 - 2007",
      responsibilities: [
        "Ensured all products were made, including ice creams, cakes, and waffle cones, etc...",
        "Managed morning operations and ensured everything ran smoothly.",
      ],
      details:
        "As the AM Assistant Manager at Cold Stone Creamery, I was responsible for overseeing morning operations and ensuring product quality. This role developed my leadership and organizational skills.",
      story:
        "At Cold Stone Creamery, we had a tradition of singing a cheesy song whenever someone put money in the tip jar. Despite my less-than-stellar singing voice, customers would often tip just to hear me sing. This experience taught me the value of embracing challenges with humor and positivity, a mindset that has served me well in tackling complex coding problems and fostering a positive team environment in my tech career.",
      shortDescription:
        "Ensured all products were made, including ice creams, cakes, and waffle cones.",
      learned:
        "Developed skills in product quality control, learned effective time management techniques, and improved my ability to train and supervise staff.",
    },
    {
      title: "Food & Beverage",
      company: "Six Flags Over Texas - Arlington, TX",
      period: "2004 - 2005",
      responsibilities: [
        "Worked the counter selling foot-long hotdogs under the Texas Giant.",
        "Responsible for opening and closing the stand, including cashier area and food prep/setup.",
      ],
      details:
        "At Six Flags Over Texas, I gained experience in customer service and food preparation. This role taught me the importance of efficiency and customer satisfaction in a fast-paced environment.",
      story:
        "The highlight of working at Six Flags was the employee days. The park would close to the public, allowing employees to enjoy most rides with no lines. This perk not only boosted morale but also gave me insight into the importance of employee satisfaction and team building - principles I've carried into my leadership roles in the tech industry.",
      shortDescription:
        "Worked the counter selling foot-long hotdogs under the Texas Giant.",
      learned:
        "Improved customer service skills in a fast-paced environment, learned the basics of cash handling and food safety, and developed the ability to work efficiently as part of a team.",
    },
  ],
  education: [
    {
      degree: "Full-Stack Software Engineer Certificate",
      school: "Kenzie Academy",
      year: "Apr 2020",
      fieldOfStudy: "Software Engineering",
      achievements: [
        "Completed 2350+ hours of hands-on coding experience",
        "Developed multiple full-stack applications",
        "Collaborated on team projects using Agile methodologies",
        "Excelled and was offered a position as a tutor to help other students.",
      ],
      notableCourses:
        "Web Development, JavaScript, React, Node.js, Python, Django, Database Management, UI/UX",
    },
    {
      degree: "Associate of Applied Science in Culinary Arts",
      school: "Le Cordon Bleu",
      year: "2009",
      fieldOfStudy: "Culinary Arts",
      achievements: [
        "Completed externship at a prestigious Golf Country Club that hosts the PGA tour.",
        "Won first place in school's annual chicken bbq competition",
      ],
      notableCourses:
        "Business Management, Food Safety and Sanitation, Restaurant Management",
    },
  ],
  skills: {
    technical: [
      {
        name: "JavaScript",
        details:
          "Proficient in modern JavaScript, including ES6+ features. I used JS extensively during my bootcamp and have since graduated to TypeScript. While I don't use vanilla JS as frequently now, my strong foundation in it continues to inform my work with more advanced technologies.",
        icon: "FileJson",
        applications: [
          "Used JavaScript to build a solid foundation in programming concepts.",
          "Developed numerous projects ranging from simple utilities to complex web applications.",
          "Created React projects including a Twitter clone and a Trello clone, demonstrating proficiency in modern web development practices.",
        ],
      },
      {
        name: "React",
        details:
          "Extensive experience building complex, responsive UIs with React. Familiar with hooks, context API, and state management solutions like Redux.",
        icon: "Atom",
        applications: [
          "I learned React while in school and have continued to use it since mainly in the form of Next.js.",
        ],
      },
      {
        name: "Node.js",
        details:
          "Skilled in building scalable backend services with Node.js. Experienced with Express.js and various middleware.",
        icon: "Server",
        applications: [
          "I am familar with Node.js, Bun, and PNMP.  I personally use Bun for all of my backend needs.",
          "Built RESTful API's for a client's e-commerce platform",
          "Created a serverless function for a data processing task",
          "Developed a microservices architecture for a scalable application",
        ],
      },
      {
        name: "Next.js",
        details:
          "Proficient in building server-side rendered and statically generated React applications with Next.js.",
        icon: "Layers",
        applications: [
          "I use Next.js for a lot of my personal and professioal projects.  I like it for smaller projects that I want to spin up quickly and don't expect to have a massive amount of traffic.",
          "Full-Stack SaaS using Next.js, Supabase, Stripe, Clerk, Prisma, and Postgres.",
        ],
      },
      {
        name: "TypeScript",
        details:
          "Strong understanding of TypeScript and its benefits in large-scale applications.",
        icon: "FileType",
        applications: [
          "I use TypeScript for all of my projects.  It is my goto language when spinning up a quick NextJS project.",
        ],
      },
      {
        name: "SQL & NoSQL Databases",
        details:
          "Experienced with both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.",
        icon: "Database",
        applications: [
          "Designed and implemented a relational database for a client's e-commerce platform",
          "Built a NoSQL database for a real-time chat application",
          "Created a data migration script for a legacy database",
        ],
      },
      {
        name: "RESTful API Design",
        details:
          "Skilled in designing and implementing RESTful APIs following best practices.",
        icon: "Webhook",
        applications: [
          "Designed a RESTful API for a client's e-commerce platform",
          "Built a RESTful API for a mobile application",
          "Created a RESTful API for a data visualization tool",
        ],
      },
      {
        name: "Git & Version Control",
        details:
          "Proficient in Git for version control and collaborative development.",
        icon: "Git",
        applications: [
          "Managed version control for a team of developers",
          "Implemented Git workflows for a software project's",
          "Created Git hooks for code linting and formatting",
        ],
      },
      {
        name: "Prisma ORM",
        details:
          "Proficient in using Prisma ORM for efficient database management and querying in Node.js/Bun applications.",
        icon: "Database",
        applications: [
          "Built a full-stack application using Prisma and Next.js",
          "Created a Prisma migration script for a database schema change",
          "Implemented a Prisma seeding script for initial data setup",
        ],
      },
      {
        name: "Swift",
        details:
          "Experienced in developing macOS and iOS applications using Swift, with a focus on creating user-friendly interfaces and efficient backend integrations.",
        icon: "Apple",
        applications: [
          "Developed multiple macOS applications including a File Tree Generator and a SVG 2 Liquid Shopify converter.",
        ],
      },
      {
        name: "React Native Expo",
        details:
          "Skilled in building cross-platform mobile applications using React Native Expo, leveraging its powerful tools for rapid development and deployment.",
        icon: "Smartphone",
        applications: [
          "Built a cross-platform mobile e-commerce application for a Shopify store.",
        ],
      },
      {
        name: "GoLang",
        details:
          "Proficient in Go programming language, utilizing its concurrency features and standard library for building efficient backend services and CLI tools.",
        icon: "Code",
        applications: [
          "I use GoLang whenever possible. I create a lot of tools and scripts that I use daily to improve my workflow and efficiency. I have not yet applied Go to a production application.",
        ],
      },
    ],
    management: [
      {
        name: "Team Leadership",
        details: "Experienced in leading and motivating teams.",
        icon: "Users",
        applications: [
          "I have work in a lot of different industries and have always been the leader in those environments. I earn respect from my peers and I am known to get things done while motivating my team to do the same.",
        ],
      },
      {
        name: "Project Management",
        details:
          "Experienced in managing complex projects from inception to delivery across various industries.",
        icon: "Gantt",
        applications: [
          "Led large-scale culinary operations for high-profile events in the food industry.",
          "Managed complex electronics repair projects with tight deadlines and high stakes.",
          "Coordinated multi-faceted business operations as a small business owner.",
        ],
      },
      {
        name: "Agile Methodologies",
        details:
          "Familiar with Agile and Scrum methodologies for software development.",
        icon: "GitBranch",
        applications: [
          "Implemented Agile methodologies for a software project",
          "Led a Scrum team for a web application",
          "Coordinated with stakeholders using Agile principles",
        ],
      },
      {
        name: "Conflict Resolution",
        details:
          "Experienced in mediating and resolving conflicts within teams.",
        icon: "Swords",
        applications: [
          "While at Vail Resorts I attended a multi month training course on executive leadership and conflict resolution I gained many skills that I have been able to use in my personal and professional life to resolve conflicts.",
        ],
      },
      {
        name: "Performance Management",
        details:
          "Skilled in setting goals, providing feedback, and evaluating team performance.",
        icon: "Target",
        applications: [
          "Set performance goals for a teams and individuals.",
          "Provided feedback to a team or an individual for improvement or recognition.",
          "Evaluated team and individual performance in multiple industries.",
        ],
      },
      {
        name: "Training & Mentoring",
        details:
          "Passionate about developing team members' skills through training and mentorship.",
        icon: "GraduationCap",
        applications: [
          "Every position I have had has involved training and mentoring (except for my first one). In the restaurant industry, I trained and mentored all of my cooks and prep cooks. In the electronics repair industry, I trained and assisted clients on how to use and troubleshoot their devices.",
        ],
      },
      {
        name: "Resource Allocation",
        details:
          "Experienced in efficiently allocating resources to maximize productivity in multiple industries.",
        icon: "PieChart",
        applications: [
          "Allocated resources for a diverse set of industries.",
          "Optimized resource allocation for a team and company.",
          "Managed a budget for a large-scale project.",
        ],
      },
      {
        name: "Change Management",
        details:
          "Skilled in guiding teams through organizational changes and new process implementations.",
        icon: "Shuffle",
        applications: [
          "Led a team through a major organizational change: While at the 10th I was tasked with leading the team in absense of an Executive Chef, for several months and helped the replacement integrate into the team and the company.",
        ],
      },
      {
        name: "Time Management",
        details:
          "Excellent at prioritizing tasks, meeting deadlines, and maximizing productivity in fast-paced environments.",
        icon: "Clock",
        applications: [
          "Managed a team's workload for a projects across industries.",
          "Prioritized tasks for a busy workday",
          "Coordinated with stakeholders to meet tight deadlines",
        ],
      },
      {
        name: "Delegation",
        details:
          "Skilled in assigning tasks effectively, leveraging team members' strengths to achieve optimal results.",
        icon: "Share2",
        applications: [
          "Delegated tasks to team members based on their strengths",
          "Managed a team for a large-scale initiative",
        ],
      },
      {
        name: "Communication",
        details:
          "Strong verbal and written communication skills, adept at conveying complex ideas clearly to diverse audiences.",
        icon: "MessageCircle",
        applications: [
          "Communicated project updates to stakeholders",
          "Presented a project proposal to a board of directors",
          "Facilitated a team meeting to discuss project goals",
          "Communicated with clients on a daily basis to ensure project goals are met.",
          "Assisted clients during times of crisis to ensure their satisfaction.",
        ],
      },
      {
        name: "Problem Solving",
        details:
          "Analytical thinker with a proven track record of identifying issues and implementing effective solutions.",
        icon: "Zap",
        applications: [
          "Identified and solved a critical issue in a software project",
          "Analyzed data to identify a root cause of a problem",
          "Implemented a solution to improve team productivity",
        ],
      },
    ],
    business: [
      {
        name: "Strategic Planning",
        details:
          "Experienced in developing and implementing business strategies.",
        icon: "Compass",
        applications: [
          "Developed a business strategy for a startup",
          "Led a team to implement a new business strategy",
          "Analyzed market trends to inform business decisions",
        ],
      },
      {
        name: "Financial Management",
        details:
          "Skilled in budgeting, financial forecasting, and cost control.",
        icon: "DollarSign",
        applications: [
          "Managed the budget for projects across industries.",
          "Forecasted financial projections for a startup",
          "Implemented cost-saving measures for a business",
        ],
      },
      {
        name: "Customer Relationship Management",
        details:
          "Experienced in building and maintaining strong client relationships.",
        icon: "Heart",
        applications: [
          "Managed client relationships across multiple industries.",
          "Negotiated contracts with key clients",
          "Solved client issues to ensure satisfaction.",
        ],
      },
      {
        name: "Market Analysis",
        details:
          "Capable of conducting market research and identifying business opportunities.",
        icon: "TrendingUp",
        applications: [
          "Conducted market research for a new product launch",
          "Identified growth opportunities in a competitive market",
          "Analyzed market trends to inform business decisions",
        ],
      },
      {
        name: "Business Development",
        details:
          "Skilled in identifying and pursuing new business opportunities.",
        icon: "Briefcase",
        applications: [
          "Identified and pursued new business opportunities",
          "Negotiated partnerships with key vendors",
          "Expanded the product offerings of a business",
          "I have been invovled with 9 Startups and am familiar with the process of getting a new business off the ground.",
        ],
      },
      {
        name: "Operational Efficiency",
        details:
          "Experienced in streamlining operations to improve productivity and reduce costs.",
        icon: "Settings",
        applications: [
          "Streamlined operations for a software project",
          "Implemented new processes to improve efficiency",
          "Reduced costs through operational optimization",
        ],
      },
      {
        name: "Risk Management",
        details:
          "Capable of identifying, assessing, and mitigating business risks.",
        icon: "Shield",
        applications: [
          "Identified and mitigated risks for a software project",
          "Developed a risk management plan for a startup",
          "Implemented contingency plans for potential disruptions",
        ],
      },
      {
        name: "Negotiation",
        details:
          "Strong negotiation skills for dealing with clients, vendors, and partners.",
        icon: "MessageSquare",
        applications: [
          "Negotiated contracts with key clients",
          "Negotiated partnerships with vendors",
          "Resolved disputes with partners",
        ],
      },
      {
        name: "Sales & Marketing",
        details:
          "Skilled in sales and marketing strategies to drive business growth.",
        icon: "ShoppingCart",
        applications: [
          "Developed a sales strategy for a new product launch",
          "Led a marketing campaign to increase brand awareness",
          "Implemented lead generation strategies for a business",
        ],
      },
    ],
  },
  projects: [
    {
      name: "Nerd Stuff of Alabama LLC.",
      description:
        "A Shopify e-commerce website using a Liquid Template. The site sells collectible and unique items for nerd culture such as Funko Pops!, Comic Books, and more.",
      link: "https://alnerdstuff.com",
    },
    {
      name: "East Texas Electronics LLC.",
      description:
        "This was my Shopify store that I built to sell electronics and computer parts globally. It is no longer in operation since shutting down the retail side of things to focus on software development.",
      link: "N/A",
    },
    {
      name: "Global Sweets Market LLC.",
      description:
        "A Shopify e-commerce website using a Liquid Template. The site sells a variety of sweets from around the world.",
      link: "https://globalsweetsmarket.com",
    },
    {
      name: "AICaseReport.com",
      description:
        "A Full-Stack web application built using the NextJS t3 stack.  This site allows users to utilize AI to generate case reports and case studies for business professionals.",
      link: "https://AiCaseReport.com",
    },
    {
      name: "SVG 2 Liquid",
      description:
        "A macOS application built using Swift that allows users to convert SVG files to Liquid templates for Shopify. This was a passion project of mine that I built to help Shopify store owners convert their SVG files to Liquid templates.",
      link: "https://roberthavelaar.dev/svg-2-liquid",
    },
    {
      name: "File Tree Generator",
      description:
        "A macOS or Go application that allows users to generate a visual representation of the file structure within a directory.",
      link: "https://roberthavelaar.dev/ftg-app",
    },
  ],
  about: {
    description:
      "Passionate about technology and problem-solving, I bring a unique blend of culinary management experience and software development skills. I thrive in dynamic environments where I can apply my diverse skill set to create innovative solutions and drive business growth. My background in both tech and culinary arts allows me to approach challenges with creativity and precision.",
    hobbies: [
      "Hiking and exploring nature trails",
      "Amateur photography, especially landscape and macro shots.",
      "Cooking and experimenting with fusion cuisines",
      "Traveling to new places and experiencing different cultures.",
      "Reading science fiction and technology books",
      "Volunteering at local animal shelters to help walk and socialize the dogs.",
    ],
  },
};
