// 配置一个项目需要的axios
import axios from 'axios'
import store from '@/store'
import router from '@/router'

axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// axios.defaults.headers.Authorization = `Bearer ${store.getUser().token}`

// 请求拦截器
axios.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  return config
}, (err) => {
  return Promise.reject(err)
})

// 添加响应拦截器(每次后端给你响应)
axios.interceptors.response.use(res => res,
  err => {
    // console.log(err.response)
    const status = err.request.status
    if (status === 401) {
      store.delUser()
      router.push('/login')
    }
    return Promise.reject(err)
  })

export default axios
