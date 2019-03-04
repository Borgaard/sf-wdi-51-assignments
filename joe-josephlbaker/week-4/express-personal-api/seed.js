// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

// const db = require('./models');

// const new_campsite = {description: "Sharp rocks. Middle of nowhere."}

// db.Campsite.create(new_campsite, function(err, campsite){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new campsite", campsite._id)
//   process.exit(); // we're all done! Exit the program.
// })

const db = require('./models');

const profiles_list = [
  {
    name: 'Joe Baker',
    githubUsername: 'josephlbaker',
    githubLink: 'https://github.com/josephlbaker',
    personalSiteLink: 'joelucasbaker.com',
    currentCity: 'San Francisco',
    projects: [
      {
        name: 'Monument',
        description: 'Use HTML and CSS to design a basic blog website',
        githubRepoUrl: 'https://github.com/josephlbaker/sf-wdi-51-assignments/tree/master/joe-josephlbaker/week-1/week-one-project'
      },
      {
        name: 'Supermarket website',
        description: 'Use HTML, CSS and javaScript to create a website with cart functionality',
        githubRepoUrl: 'https://github.com/josephlbaker/sf-wdi-51-assignments/tree/master/joe-josephlbaker/week-2/week-two-project'
      }
    ]
  },
  {
    name: 'Jane Doe',
    githubUsername: 'example',
    githubLink: 'https://github.com/example',
    personalSiteLink: 'example.com',
    currentCity: 'New York',
    projects: [
      {
        name: 'Example project 1',
        description: 'this is the first example project',
        githubRepoUrl: 'https://github.com/example/exampleproject1'
      },
      {
        name: 'Example project 2',
        description: 'this is the second example project',
        githubRepoUrl: 'https://github.com/example/exampleproject2'
      }
    ]
  }
]

const projects_list = [
  {
    name: 'Monument',
    description: 'Use HTML and CSS to design a basic blog website',
    githubRepoUrl: 'https://github.com/josephlbaker/sf-wdi-51-assignments/tree/master/joe-josephlbaker/week-1/week-one-project'
  },
  {
    name: 'Supermarket website',
    description: 'Use HTML, CSS and javaScript to create a website with cart functionality',
    githubRepoUrl: 'https://github.com/josephlbaker/sf-wdi-51-assignments/tree/master/joe-josephlbaker/week-2/week-two-project'
  },
  {
    name: 'Example project 1',
    description: 'this is the first example project',
    githubRepoUrl: 'https://github.com/example/exampleproject1'
  },
  {
    name: 'Example project 2',
    description: 'this is the second example project',
    githubRepoUrl: 'https://github.com/example/exampleproject2'
  }
]