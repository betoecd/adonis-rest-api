'use strict'

const Annotation = use('App/Models/Annotation')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with annotations
 */
class AnnotationController {
  /**
   * Show a list of all annotations.
   * GET annotations
   */
  async index () {
    const properties = Annotation.all()

    return properties
  }

  /**
   * Create/save a new annotation.
   * POST annotations
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single annotation.
   * GET annotations/:id
   */
  async show ({ params }) {
    const annotation = await Annotation.findOrFail(params.id)

    await annotation.load('images')

    return annotation
  }

  /**
   * Update annotation details.
   * PUT or PATCH annotations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a annotation with id.
   * DELETE annotations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AnnotationController
