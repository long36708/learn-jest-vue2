/**
 * @Author: longmo
 * @Date: 2025-01-19 14:01:23
 * @LastEditTime: 2025-01-19 14:04:08
 * @FilePath: vue.config.js
 * @Description:
 */
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
