import AuthService from "../services/auth.service"
import axios from "axios";

const user = JSON.parse(localStorage.getItem('user'))
const initialState = user ? {status: { loggedIn: true }, user }
                        : {status: { loggedIn: false}, user: null }

export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        login({ commit }, user) {
            return AuthService.login(user).then(
                user => {
                    const result = JSON.parse(Buffer.from(user.token.split('.')[1], 'base64').toString())
                    axios.get('https://localhost:8080/users/' + result["sub"])
                      .then(res => {
                          res.data['token'] = user.token
                          commit('loginSuccess', res.data)
                          return Promise.resolve(user)
                        })
                      .catch(e => console.log(e))

                }).catch(e => {
                    commit('loginFailure')
                    return Promise.reject(e.response.data)})
        },
        logout({ commit }) {
            AuthService.logout()
            commit('logout')
        },
        register({ commit }, user) {
            console.log(user)
            return AuthService.register(user).then(
                res => {
                    commit('registerSuccess')
                    return Promise.resolve(res.data)
                }).catch(e => {
                    console.log(e)
                    commit('registerFailure')
                    return Promise.reject(e)})
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true
            state.user = user
        },
        loginFailure(state) {
            state.status.loggedIn = false
            state.user = null
        },
        logout(state) {
            state.status.loggedIn = false
            state.user = null
        },
        registerSuccess(state) {
            state.status.loggedIn = false
        },
        registerFailure(state) {
            state.status.loggedIn = false
        }
    }
}