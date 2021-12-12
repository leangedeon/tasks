module.exports = (ROOT_PATH, timeoutRatio) => {
  var config = {
    mongo: {
        user: 'freelance',
        password: 'freelance2021',
        cluster: 'clusterfreelance.anog7.mongodb.net',
        db: 'myFirstDatabase',
    },
    api: "https://lorem-faker.vercel.app/api"
  };

  return config;
};
