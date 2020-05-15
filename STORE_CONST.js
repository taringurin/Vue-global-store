const STORE = {
  getterNames: {
    userDetialLoginStatus: 'user/userDetail/loginStatus',
  },
  actionNames: {
    userDetialLogin: 'user/userDetail/login'
  }
}
  
export default STORE

// >>> example <<<
// === Js/Ts file ===
// import STORE_CONST from '../store-const.js'
// const userLogged = await store.getters[STORE_CONST.getterNames.userDetialLoginStatus]

// === Vue file ===
// 1.) Import file
// import STORE_CONST from '~/store-const'
// 2.) Declaration
// data () {
//   return {
//     actions: {
//       login: STORE_CONST.actionNames.userDetialLogin
//     }
//   }
// }
// 3.) Get user
// const login = await this.$store.dispatch(this.actions.login, {
//     username: this.username,
//     password: this.password
// })