// 负责 用户信息的 存储  获取 删除三个函数
const KEY = 'toutiao'
export default {
  setUser (user) {
    // 存储
    const jsonStr = JSON.stringify(user)
    window.sessionStorage.setItem(KEY, jsonStr)
  },
  // 获取
  getUser () {
    const jsonStr = window.sessionStorage.getItem(KEY) || '{}'
    return JSON.parse(jsonStr)
  },
  // 删除
  delUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
