'use strict';
const svgCaptcha = require('svg-captcha');
const Controller = require('egg').Controller;
const { v1: uuidv1 } = require('uuid');

class AuthController extends Controller {
  async getCode() {
    const captcha = svgCaptcha.create({
      size: 4,
      fontSize: 50,
      ignoreChars: 'Ooli',
      width: 100,
      height: 36,
      noise: 3,
      color: true,
      background: '#cc9966',
    });
    this.ctx.session.captcha = captcha.text;
    this.ctx.response.type = 'image/svg+xml';
    const uuid = uuidv1();
    const code = captcha.text
    global[uuid] = code;
    this.ctx.body = { img: captcha.data, uuid }
  }
  async login() {
    const { uuid, code } = this.ctx.request.body;
    if (global[uuid] === code) {
      this.ctx.body = 'hi, welcom Bulin Zhang to login ';

    } else {
      this.ctx.body = 'invalid captcha code!'
    }

  }
}

module.exports = AuthController;
