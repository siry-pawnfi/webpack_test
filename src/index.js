import './css/index.css'
// require('./css/index.css')
// const _ = require('lodash')
function component() {
  const element = document.createElement('div');

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = "hello webpack"

  console.log('测试pr')
  console.log('测试pr2222')
  console.log('测试pr2222')
  console.log('测试pr33333')
  
  console.log('测试pr33333')


  console.log('测试提交签名2222222')
  console.log('测试提交签名2222222')

  console.log('测试提交签名2222222')

  console.log('测试提交签名2222222')

  console.log('测试提交签名2222222')
  console.log('测试提交签名2222222')
  console.log('测试提交签名2222222')
  console.log('测试提交签名2222222')



  return element;
}

document.body.appendChild(component());
