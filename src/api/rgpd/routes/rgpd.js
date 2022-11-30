'use strict';

/**
 * rgpd router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::rgpd.rgpd');
