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
    this.ctx.body = { img:captcha.data, uuid: uuidv1() }
  }
  async login() {
    this.ctx.body = 'hi, welcom Bulin Zhang to login ';
  }
}

module.exports = AuthController;
