'use strict';
const { sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  deleteEmployees: async ctx => {
    const rowsDeleted = await strapi.services.company.deleteEmployees(ctx.request.body)
    return {
      employees: rowsDeleted.map(row => {
        return {
          id: row.id,
          last_name: row.last_name,
          first_name: row.first_name,
          position: row.position,
          company: {
            name: row.company.name,
            address: row.company.address,
            description: row.company.description
          }
        }
      })
    }
  }
};
