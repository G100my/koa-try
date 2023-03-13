const { Model } = require('objection')

class Album extends Model {
  static get tableName() {
    return 'Album'
  }
}

module.exports = Album
