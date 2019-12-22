import axios from 'axios'
import router from '../router'
import { Message } from 'element-ui'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  let token = window.localStorage.getItem('user-token')
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function () {

})

axios.interceptors.response.use(function (response) {
  return response.data ? response.data : {}
}, function (error) {
  let status = error.response.status

  let message = ''
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      window.localStorage.removeItem('user-token')
      router.push('/login')
      break
    case 507:
      message = '数据库服务器异常'
      break
    case 404:
      message = '手机号不正确'
      break
    case 401:
      window.localStorage.removeItem('user-token')
      router.push('/login')
      break
    default:
      break
  }
  Message({ type: 'warning', message })
})
export default axios
