'use strict';

/**
 * chef router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::chef.chef');
