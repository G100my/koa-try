const { Model } = require('objection')

class Album_Photo extends Model {
  static get tableName() {
    return 'Album_Photo'
  }
}

module.exports = Album_Photo
