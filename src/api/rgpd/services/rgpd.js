'use strict';

/**
 * rgpd service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rgpd.rgpd');
