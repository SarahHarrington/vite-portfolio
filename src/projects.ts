interface Project {
  name: string;
  header: string;
  summary: string;
  techStack: string;
  githubLink?: string | string[];
  liveDemo?: string;
}

const projects: Project[] = [
  {
    name: 'canvas-playground-react',
    header: 'Canvas Playground (React)',
    summary: '',
    techStack: `I'm currently working on a new version of the Canvas Playground that
    will use React, TypeScript, Socket.io and it will be hosted on AWS.`,
    githubLink: 'https://github.com/SarahHarrington/react-cookies',
    liveDemo: 'https://cookieconfusionreact.sarahdoes.tech',
  },
  {
    name: 'cookie-confusion-react',
    header: 'Cookie Confusion (React)',
    summary: `A redo of my Cookie Confusion project done to familiarize myself
    with the newest version of React and using it with TypeScript.`,
    techStack: 'React, TypeScript',
    githubLink: 'https://github.com/SarahHarrington/react-cookies',
    liveDemo: 'https://cookieconfusionreact.sarahdoes.tech/',
  },
  {
    name: 'movie-looker',
    header: 'Movie Looker',
    summary: `This project was made to start learning React hooks. This is a work
    in progress, you can check what's next on my repo!`,
    techStack: 'React',
    githubLink: 'https://github.com/SarahHarrington/movie-lookup',
    liveDemo: 'https://movielookup.sarahdoes.tech/',
  },
  {
    name: 'rails-blog',
    header: 'Rails Blog',
    summary: `This blog was a side project started to better learn Ember and Ruby
    on Rails.`,
    techStack: 'Ember, Ruby on Rails',
    githubLink: ['https://github.com/SarahHarrington/ember-blog', 'https://github.com/SarahHarrington/rails-blog'],
  },
  {
    name: 'canvas-playground',
    header: 'Canvas Playground',
    summary: `This HTML canvas whiteboard was created using a websocket so users
    can draw and interact with each other. The drawings are stored on
    the server until the board is erased and users will see the existing
    drawings when they join.`,
    techStack: 'HTML, CSS, JavaScript, Node.js, Socket.io',
    githubLink: 'https://github.com/SarahHarrington/canvas-app',
  },
  {
    name: 'cookie-confusion',
    header: 'Cookie Confusion',
    summary: `I was learning Adobe Illustrator and PhotoShop and had way too much
    fun editing cookie pictures.`,
    techStack: 'HTML, CSS, JavaScript',
    githubLink: 'https://github.com/SarahHarrington/cookie-confusion',
    liveDemo: '',
  },
  // {
  //   name: '',
  //   header: '',
  //   summary: '',
  //   techStack: '',
  //   githubLink: '',
  //   liveDemo: '',
  // }
]