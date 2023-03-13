const { Model } = require('objection')

class Photo extends Model {
  static get tableName() {
    return 'Photo'
  }
}

module.exports = Photo
