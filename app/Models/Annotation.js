'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Annotation extends Model {
  /**
   * Relantionship with User model.
   * An annotation always belongs to a user
   *
   * @method user
   *
   * @return {Object}
   */
  user () {
    return this.belongsTo('App/Models/User')
  }

  /**
   * Relantionship with Image model.
   * An annotation can have N images.
   *
   * @method images
   *
   * @return {Objects}
   */
  images () {
    return this.hasMany('App/Models/Image')
  }
}

module.exports = Annotation
