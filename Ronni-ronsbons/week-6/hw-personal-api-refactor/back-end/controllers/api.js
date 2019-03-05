module.exports = {
  index: (request,response) => {
    response.json({
      woopsIForgotToDocumentAllMyEndpoints: true,
      message: "Welcome to my personal API! Here's what you need to know!",
      documentationUrl: "https://github.com/ronsbons/express-personal-api/README.md", // CHANGE ME
      baseUrl: "http://shielded-garden-69863.herokuapp.com",
      endpoints: [
        {
          method: "GET",
          path: "/api",
          description: "Describes all available endpoints"
        },
        {
          method: "GET",
          path: "/profile",
          description: "A little about me"
        },
        {
          method: "GET",
          path: "/destinations",
          description: "Places I've been"
        },
        {
          method: "POST",
          path: "/destinations",
          description: "Create a new destination"
        },
        {
          method: "PUT",
          path: "/destinations",
          description: "Edit and update a previous destination",
        },
        {
          method: "DELETE",
          path: "/destinations",
          description: "Delete a destination",
        },
      ],
    });
  },
};