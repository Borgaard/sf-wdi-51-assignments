module.exports = {
  show: (request, response) => {
    // Data
    let profile = {
      name: 'Ronni',
      githubUsername: 'ronsbons',
      githubLink: 'https://github.com/ronsbons',
      currentCity: 'San Mateo',
      pets: [
          {
              name: 'Fluffy',
              type: 'rabbit',
              isAlive: false,
          },
          {
              name: 'Tweety',
              type: 'bird',
              isAlive: false,
          },
          {
              name: 'Tiger',
              type: 'cat',
              isAlive: false,
          },
          {
              name: 'Holiday',
              type: 'cat',
              isAlive: true,
          },
      ],
    };

    // return profile as response
    response.json(profile);
  },
};