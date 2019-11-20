'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/services.html#core-services)
 * to customize this service
 */

module.exports = {
  /**
   * Promise to delete employees under company
   *
   * @return {Promise}
   */

  deleteEmployees(params) {
    return new Promise(function (resolve, reject) {
      const result = strapi
        .query('employee')
        .delete({ company: Number(params.id) })

      resolve(result)
    })
  }
};
