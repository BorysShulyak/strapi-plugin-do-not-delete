'use strict';

// eslint-disable-next-line node/no-missing-require
const { ValidationError } = require('@strapi/utils').errors;

const { isProtectedEntity } = require('../utils');

module.exports = () => ({
  validate(entity, rules) {
    if (!rules.length) {
      return;
    }

    /**
     * @TODO - i18n support for this error message.
     */

    // Do not delete if this is a protected entry.
    if (isProtectedEntity(entity, rules)) {
      throw new ValidationError('This entry is protected and cannot be deleted.');
    }
  },
});
