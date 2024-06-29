// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'itzzjb', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Recent Github Repositories',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 6, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: ['itzzjb/itzzjb', 'itzzjb/itzzjb.github.io'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['', ''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Mern Fullstack Notes Application',
          description: 'In development ...',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj-aXWWJ4sm2jdZ3FHT2GdEcyoJQKI9bQTjns0t7wPIA&s',
          link: 'https://github.com/itzzjb/mern-fullstack-notes-app',
        },
        {
          title: 'Spring-boot E-commerce Website Backend',
          description:
            'This is an E-Commerce Website backend created using Spring-boot REST API , JPA / Postgresql database, JWT authentication and Gmail SMTP.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHT0YwFEvHqGYCpPStMRKzY13LyosWA-QwdBIdIXgQVg&s',
          link: 'https://github.com/itzzjb/springboot-ecommerce-backend',
        },
        {
          title: 'Menverse E-commerce Website',
          description:
            'This is an Ecommerce Website created using PHP, MySQL and basic Java Script. No frameworks and libraries have been used here.',
          imageUrl:
            'https://static-00.iconduck.com/assets.00/php-icon-256x256-oq5bc0bt.png',
          link: 'https://github.com/itzzjb/menverse-ecommerce-website',
        },
      ],
    },
  },
  seo: {
    title: 'Januda Bethmin | Portfolio',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'janudabethmin',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'desilvabethmin',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'januda.live',
    phone: '+94777772229',
    email: 'desilvabethmin@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1lvjrR9WgKCpiYVAwuoCfRkXlyq8vGR0s/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Spring-boot',
    'Java',
    'Postgres',
    'MySQL',
    'Python',
    'Git',
    'Mongodb',
    'Express.js',
    'React.js',
    'Node.js',
    'Docker',
    'Github Actions',
    'Github Actions',
    'AWS',
    'TypeScript',
    'JavaScript',
    'PHP',
  ],
  // experiences: [
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'September 2021',
  //     to: 'Present',
  //     companyLink: 'https://example.com',
  //   },
  //   {
  //     company: 'Company Name',
  //     position: 'Position',
  //     from: 'July 2019',
  //     to: 'August 2021',
  //     companyLink: 'https://example.com',
  //   },
  // ],
  certifications: [
    {
      name: 'Github Foundations',
      body: '',
      year: 'May 2024',
      link: 'https://www.credly.com/badges/5ed0eafc-5c19-464b-9d2f-ca854e36e1b7/linked_in_profile',
    },
    {
      name: 'AWS Technical Essentials',
      body: '',
      year: 'April 2024',
      link: 'https://www.coursera.org/account/accomplishments/verify/ZA2C5CYPJCLK',
    },
    {
      name: 'Career Essentials in Github Professional Certificate',
      body: '',
      year: 'April 2024',
      link: 'https://www.linkedin.com/learning/certificates/602b0b6d85ac0f09d6d2ccf4bffbb8c27cf3bc45b306553624b4d9f9cf28619d',
    },
  ],
  educations: [
    {
      institution: 'University Of Kelaniya',
      degree: 'BSc (Hons) in Software Enginnering',
      from: '2022',
      to: 'Present',
    },
    {
      institution: 'Esoft Metro Campus',
      degree: 'Diploma in Software Engineering',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Royal College, Colombo 07',
      degree: 'Advanced Level - Phycial Science Stream',
      from: '2018',
      to: '2020',
    },
    {
      institution: 'St. Benedicts College, Colombo 13',
      degree: 'Odinary Level',
      from: '2007',
      to: '2017',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'desilvabethmin', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'winter',
      'emerald',
      'garden',
      'cmyk',
      'fantasy',
      'wireframe',
      'nord',
      'lofi',

      'aqua',
      'synthwave',
      'dracula',
      'dark',
      'forest',
      'dim',
      'business',
      'night',

      // 'pastel',
      // 'corporate',
      // 'light',
      //'autumn',
      // 'acid',
      // 'cupcake',
      // 'bumblebee',
      //'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'black',
      // 'luxury',
      // 'lemonade',
      // 'coffee',
      // 'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
