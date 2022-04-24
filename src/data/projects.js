const projectsData = [
  {
    name: "MailDrip",
    desc: `Send drip emails that reach the heart of your audience with Maildrip’s easy-to-use platform, guaranteed to improve sales.
    (Heading an engineering team of 3 developers)`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://maildrip.io/",
    image: ["/images/maildrip.jpg"],
    link: "https://github.com/Emmaccen/",
    linkHover: "Repository Is Private",
    linkIcon: "icon-git",
  },
  {
    name: "korphy Store",
    desc: `An enterprises e-commerce application targeted at beverage stores [Admin]. (Built entirely by yours truely)`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://bevy-store.netlify.app/admin/dashboard",
    image: ["/images/bevy-store.png"],
    link: "https://github.com/Emmaccen/",
    linkHover: "Repository Is Private",
    linkIcon: "icon-git",
  },
  {
    name: "SIWES UI",
    desc: `This is a SIWES UI, partnering with a backend developer to automate SIWES processes in Nigerian/African universities. 
    (Designed entirely by yours truely).`,
    type: "UI | UX",
    typeIcon: "icon-round-brush",
    technology: "Figma",
    techIcon: "",
    techIconImg: "/images/figma.svg",
    url: "https://www.figma.com/file/bQFkgSr2cv2cEOa0F6BPIY/SIWES?node-id=28%3A3",
    image: ["/images/siwes.png"],
    link: "https://www.behance.net/emmaccen/",
    linkHover: "Behance",
    linkIcon: "icon-round-brush",
  },
  {
    name: "korphy Store",
    desc: `korphy store. A beverage store application that allows people to order coffee online [Customer]. (Built by yours truely)`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://bevy-store.netlify.app/home",
    image: ["/images/bevy-client.png"],
    link: "https://github.com/Emmaccen",
    linkHover: "Git Repo is private",
    linkIcon: "icon-git",
  },
  {
    name: "Bevily Foods",
    desc: `'Bevily Foods' is a food company that offers commercial food services to people ranging from online 
        food orderings, to table bookings and many more. Its a side project i came up with, and this online store is 
        purely fictious and non-existent. I love playing around with designs and applications.`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://bevily.netlify.app/",
    image: ["/images/bevilyFoods.jpg"],
    link: "https://github.com/Emmaccen/bevy",
    linkHover: "Git Repo",
    linkIcon: "icon-git",
  },
  {
    name: "korphy Store UI",
    desc: `This is an enterprises e-commerce UI targeted at beverage stores. (Designed by yours truely)`,
    type: "UI | UX",
    typeIcon: "icon-round-brush",
    technology: "Figma",
    techIcon: "",
    techIconImg: "/images/figma.svg",
    url: "https://www.figma.com/file/mHKwJTfWNeDCN1A8wc2flq/COFFEE?node-id=0%3A1",
    image: ["/images/bevyUi.png"],
    link: "https://www.behance.net/emmaccen/",
    linkHover: "Behance",
    linkIcon: "icon-round-brush",
  },
  {
    name: "TYPO",
    desc: `Typo is an application that helps you improve your typing speed and accuracy. It's got real-time error checking, analytics and more. (Built by yours truely)`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://typospeedstar.netlify.com/",
    image: ["/images/typo.png"],
    link: "https://github.com/Emmaccen/typo",
    linkHover: "Git Repo",
    linkIcon: "icon-git",
  },
  {
    name: "Okemesi In Diaspora",
    desc: `Okemesi in Diaspora (OiD) is an association of people living far from home who came together to empower others thorough development programs and projects`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://okemesi.netlify.app/",
    image: ["/images/okemesi.jpg"],
    link: "https://github.com/Emmaccen/",
    linkHover: "Git Repo",
    linkIcon: "icon-git",
  },
  {
    name: "Shoe e-store UI",
    desc: `Ecommerce store for shoes. Definitely lunching this one soon. (Designed by yours truely)`,
    type: "UI | UX",
    typeIcon: "icon-round-brush",
    technology: "Figma",
    techIcon: "",
    techIconImg: "/images/figma.svg",
    url: "https://www.figma.com/proto/AC0mrDzzgOJJNmIeOQ9UxA/JUST-SHOES?node-id=5%3A1&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=5%3A1",
    image: ["/images/shoe-store.jpg"],
    link: "https://www.behance.net/emmaccen/",
    linkHover: "Behance",
    linkIcon: "icon-round-brush",
  },
  {
    name: "IrisLens Photography",
    desc: `IrisLens is a Photography website owned by David Aderogba, dedicated to helping 
        you keep memories in the most perfect and splendiferous way. They care about people and 
        their happiness, and they in every way possible give them the best of their services.`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://irislens.netlify.com/",
    image: ["/images/irisLens.jpg"],
    link: "https://github.com/Emmaccen/iris",
    linkHover: "Git Repo",
    linkIcon: "icon-git",
  },
  {
    name: "TYPO Webapp Design",
    desc: `Application design for "Typo". A Software that imporves your typing speed and accuracy`,
    type: "UI | UX",
    typeIcon: "icon-round-brush",
    technology: "Figma",
    techIcon: "",
    techIconImg: "/images/figma.svg",
    url: "https://www.figma.com/file/gRgXBC1MqoPJhz9zdhXMIn/Typo?node-id=0%3A1",
    image: ["/images/typodesign.png"],
    link: "https://www.behance.net/emmaccen/",
    linkHover: "Behance",
    linkIcon: "icon-pinterest2",
  },
  {
    name: "Blog Post UI",
    desc: `Blogging on dev.to, this Interface serves as a reference to one of my Articles (How To Build Your portfolio website...)". 
        Covers the use of pure "HTML and CSS"`,
    type: "UI | UX",
    typeIcon: "icon-round-brush",
    technology: "Figma",
    techIcon: "",
    techIconImg: "/images/figma.svg",
    url: "https://www.figma.com/file/06sZmTFTbPFJjm918O7TKP/Dev-Portfolio?node-id=0%3A1",
    image: ["/images/blogUi.jpg"],
    link: "https://www.behance.net/emmaccen/",
    linkHover: "Behance",
    linkIcon: "icon-pinterest2",
  },

  {
    name: "Ludidi Properties",
    desc: `LCM Properties is a commercial and residential property management company with properties in diverse locations throughout South Africa.`,
    type: "Web",
    typeIcon: "icon-globe",
    technology: "React.Js",
    techIcon: "icon-genius",
    url: "https://ludidi.netlify.app/",
    image: ["/images/ludidi.jpg"],
    link: "https://github.com/Emmaccen/",
    linkHover: "Git Repo",
    linkIcon: "icon-git",
  },
  // {
  //   name: "Portfolio Website",
  //   desc: `Created by yours truly, slowing being optimized for efficiency, frequently updated and chiseled for
  //       high flexibility. This Website is owned and managed by me.`,
  //   type: "Web",
  //   typeIcon: "icon-globe",
  //   technology: "Html, Css & Js",
  //   techIcon: "icon-html-five2",
  //   url: "https://emmaccen.github.io/emmaccen",
  //   image: ["/images/emmaccen.jpg"],
  //   link: "https://github.com/Emmaccen/emmaccen",
  //   linkHover: "Git Repo",
  //   linkIcon: "icon-git",
  // },
  // {
  //   name: "Fahion UI",
  //   desc: `This Project was originally developed for a friend intending to open a fashion store.
  //       Having the vision of a store that serves its customers with optimum convenience. UI is subject to
  //       modifications.`,
  //   type: "UI | UX",
  //   typeIcon: "icon-round-brush",
  //   technology: "Figma",
  //   techIcon: "",
  //   techIconImg: "/images/figma.svg",
  //   url: "https://www.figma.com/proto/qQsciKWiGpSTkLDBDq56Ho/Fashion?node-id=1%3A6&scaling=min-zoom",
  //   image: ["/images/fashion.jpg"],
  //   link: "https://www.behance.net/emmaccen/",
  //   linkHover: "Behance",
  //   linkIcon: "icon-pinterest2",
  // },
  // {
  //   name: "Learning Portal",
  //   desc: `A site that offers learning materials in form of Videos and Docs. The fun part is that students can
  //       make submissions to course assignments within the website and as instructed by tutors.
  //       "This Project is still under development"`,
  //   type: "Web",
  //   typeIcon: "icon-globe",
  //   technology: "React.Js",
  //   techIcon: "icon-genius",
  //   url: "https://devstudy.netlify.app/",
  //   image: ["/images/learningPortal.jpg"],
  //   link: "https://github.com/Emmaccen/LearningPortal",
  //   linkHover: "Git Repo",
  //   linkIcon: "icon-git",
  // },
  {
    name: "Portfolio UI",
    desc: `This Interface was made for "Deepak Shrivastava", a friend, project manager and dev team member from India. 
        Working on his portfolio website.`,
    type: "UI | UX",
    typeIcon: "icon-round-brush",
    technology: "Figma",
    techIcon: "",
    techIconImg: "/images/figma.svg",
    url: "https://www.figma.com/proto/EG1W40kQchAejdcGi1de9Q/Deepak-s-UI?node-id=1%3A2&scaling=scale-down-width",
    image: ["/images/portfolioUi.png"],
    link: "https://www.behance.net/emmaccen/",
    linkHover: "Behance",
    linkIcon: "icon-pinterest2",
  },
  // {
  //   name: "Fashion UI Fun Project",
  //   desc: `A little Figma UI fun project made out in free-time. Thought it'll be nice to have it here too.`,
  //   type: "UI | UX",
  //   typeIcon: "icon-round-brush",
  //   technology: "Figma",
  //   techIcon: "",
  //   techIconImg: "/images/figma.svg",
  //   url: "https://www.figma.com/proto/4nJsGbAA6zscY1DYOiHxxx/Maykup?node-id=4%3A49&scaling=scale-down-width",
  //   image: ["/images/maykup.jpg"],
  //   link: "https://www.behance.net/emmaccen/",
  //   linkHover: "Behance",
  //   linkIcon: "icon-pinterest2",
  // },
  {
    name: "iNote Android Mobile",
    desc: `iNote is an application developed to offer optimum flexibility at taking notes. It has numerous 
        functionalities amongst which are Cloud Storage, In-App Note Sharing and many more.`,
    type: "Mobile App",
    typeIcon: "icon-mobile",
    technology: "Android Studio",
    techIcon: "icon-android",
    url: "https://github.com/Emmaccen/iNote",
    image: ["/images/iNote.jpg"],
    link: "https://github.com/Emmaccen/iNote",
    linkHover: "Git Repo",
    linkIcon: "icon-git",
  },
  // {
  //   name: "DevLookup",
  //   desc: `The idea behind DevLookup is to have a platform where developers around the world can create their
  //       own Profiles | Portfolios and have potential employers look at them. "This Project is still under development".`,
  //   type: "Web",
  //   typeIcon: "icon-globe",
  //   technology: "React.Js",
  //   techIcon: "icon-genius",
  //   url: "https://devlookup.netlify.app/",
  //   image: ["/images/devLookup.jpg"],
  //   link: "https://github.com/Emmaccen/devprofile",
  //   linkHover: "Git Repo",
  //   linkIcon: "icon-git",
  // },
];

export default projectsData;
