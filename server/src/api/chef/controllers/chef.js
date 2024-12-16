'use strict';

/**
 * chef controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chef.chef');
