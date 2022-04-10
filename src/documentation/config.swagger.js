
  
const path = require('path');

const configSwagger = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'MinasGame API',
        description: 'API.',
        contact: {
          name: 'jonatan',
          email: 'jona.cc.93@gmail.com',
        },
        license: {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
        },
        version: '1.0.0',
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Server Local',
        },
      ],
    },
    apis: [`${path.join(__dirname, '../documentation/*.yml')}`],
  };
  module.exports = { configSwagger };