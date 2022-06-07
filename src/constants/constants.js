export const projects = [
  {
    title: 'DnDinder',
    description:
      'This is a simple social media app for DnD enthusiasts to connect and organise games. The front-end was build in react with a serverless back-end, using Firebase cloud functions and a firestore database. Currently users can create and edit profiles, view other user profiles and add users to a created group. Stay tuned for messaging and other features',
    image: '/images/DnDinder.png',
    tags: ['Firebase', 'React', 'GCP', 'Node', 'Axios', 'Tailwind', 'Node.js'],
    source: 'https://github.com/boa-constructor/frontend-react-app',
    visit: 'https://dndinder-68dcc.web.app/',
    id: 0,
  },
  {
    title: 'NC News',
    description:
      'NC news is a simple news app. Built in react, this application interfaces witn my api to retrieve news articles. Users can also post comments to articles',
    image: '/images/NCNews.png',
    tags: ['React', 'Node.js', 'HTML5', 'CSS'],
    source: 'https://github.com/nickWoott/portfolio-ncnews-api.git',
    visit: 'https://subtle-malabi-2b6365.netlify.app',
    id: 1,
  },
  {
    title: 'REST API',
    description:
      'I built this api using an express server to interact with a postgres SQL database',
    image: '/images/RESTAPI.png',
    tags: ['express', 'axios', 'supertest'],
    source: 'https://github.com/nickWoott/portfolio-ncnews-api',
    visit: ' https://nc-news-app-nw.herokuapp.com/api',
    id: 2,
  },
];

export const TimeLineData = [
  {
    year: 2017,
    text: "I'm working as year 5 teacher co-ordinating science and music",
  },
  {
    year: 2018,
    text: "I left mainstream education to start my own business. It's a success!",
  },
  { year: 2021, text: 'Began to pickup coding casually as a hobby' },
  { year: 2022, text: 'Enrolled on northcoders bootcamp' },
];
