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
    const properties = Annotation
      .query()
      .with('images')
      .fetch()

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
  async store ({ auth, request, response }) {
    const { id } = auth.user
    const data = request.only([
      'title',
      'description'
    ])

    const annotation = await Annotation.create({ ...data, user_id: id })

    return annotation
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
    const annotation = await Annotation.findOrFail(params.id)

    const data = request.only([
      'title',
      'description'
    ])

    annotation.merge(data)
    await annotation.save()

    return annotation
  }

  /**
   * Delete a annotation with id.
   * DELETE annotations/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, auth, response }) {
    const annotation = await Annotation.findOrFail(params.id)

    if (property.user_id != auth.user.id){
      return response.status(401).send({ error: 'Not authorized' })
    }

    await annotation.delete()
  }
}

module.exports = AnnotationController
