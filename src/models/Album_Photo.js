const { Model } = require('objection')

class album_photo extends Model {
  static get tableName() {
    return 'album_photo'
  }
}

module.exports = album_photo
