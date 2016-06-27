'use strict';
const Hapi = require('hapi');
const Boom = require('boom');
const Joi = require('joi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Bell = require('bell');
const HapiAuthCookie = require('hapi-auth-cookie');

const server = new Hapi.Server();

server.connection({
  host: 'localhost',
  port: 7002
});

server.register([
{ register: Inert },
{ register: Vision },
{ register: HapiSwagger },
], (err) => {
  if (err) {
    throw err;
  }

  //TODO: ADD ROUTE
  server.route({
    method: 'GET',
    path: '/books',
    config: {
      tags: ['api'],
      description: 'Get book list',
      notes: 'Get book list',

      handler : function (request, reply) {
        return reply('GOTTEN BOOK LIST');
      }
    }
  });


  server.start((err) => {
    if (err) {
      throw err;
    }
    
    console.log(`Server running at ${server.info.uri}`);
  });
});

