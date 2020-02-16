// module.exports = (config) => {
//   // 在这里可以config进行配置我们的开发环境
//   return config
// }

const { override, addDecoratorsLegacy } = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy()
)




