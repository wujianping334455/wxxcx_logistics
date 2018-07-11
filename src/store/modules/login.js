import { LOGIN_DIALOG } from '@/store/mutations-type';
// state
const state = {
    loginDialog : false
}
// actions
const actions = {
    changeDialog({ state,commit},param) {
        commit(LOGIN_DIALOG);
    }    
}
// mutations
const mutations = {
    [LOGIN_DIALOG] (state) {
        state.loginDialog = !state.loginDialog;
    }
}
// getters
const getters = {

}

export default {
  state,
  mutations,
  actions
}