const initialUsers = [
  {
    email: 'root@root.com',
    name: 'Root User',
    role: 'admin',
    password: '$2y$10$wEGfq4NRkwlG0R6pzkugo..UrCH4GoaThtUEIiH1nV00W0ZPR5zgm', // 'root_pass'
  },
  {
    email: 'basic@basic.com',
    name: 'Basic User',
    role: 'player',
    password: '$2y$10$LIFf1wHKArWEQq6uvgMQzOOBq3Y52ExmdlKampNwijnzah7HTCjUy', // 'basic_pass'
  }
];

const initialContents = [
  {
    componentName: 'mainInfo',
    content: {
      en: 'Testing',
      fi: 'Testataan'
    }
  }
];

module.exports = {
  initialUsers,
  initialContents
};