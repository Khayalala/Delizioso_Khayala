'use strict';

/**
 * chef service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::chef.chef');
