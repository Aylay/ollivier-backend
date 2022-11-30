'use strict';

/**
 * contact controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::contact.contact', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);

    const mailList = 'luk.attali@gmail.com'
    let textMail = 'Bonjour'
    textMail += '<br /><br />'
    textMail += 'Cette personne a fait une demande de contact :<br /><br />'

    textMail += 'Ses coordonnées :'
    textMail += '<br />'
    
    textMail += 'Prénom : ' + response.data.attributes.prenom + '<br />'
    textMail += 'Nom : ' + response.data.attributes.nom + '<br />'
    textMail += 'Email : ' + response.data.attributes.email + '<br />'
    if (response.data.attributes.telephone.length > 0) {
      textMail += 'Téléphone : ' + response.data.attributes.telephone + '<br />'
    }
    textMail += '<br />'
    
    if (response.data.attributes.objet.length > 0) {
      textMail += 'Son objet :'
      textMail += '<br />'
      
      textMail += response.data.attributes.objet
      textMail += '<br /><br />'
    }
    
    textMail += 'Son message :'
    textMail += '<br />'
    
    textMail += response.data.attributes.message
    textMail += '<br /><br />'


    await strapi
    .plugin('email')
    .service('email')
    .send({
      to: mailList,
      from: 'garage@carrosserie-ollivier.fr',
      subject: 'Demande de contact du site',
      html: textMail,
    });
  }
}))
