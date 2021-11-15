'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, Bulin Zhang!';
  }
}

module.exports = HomeController;
