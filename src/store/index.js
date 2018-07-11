import Vue from 'vue'
import Vuex from 'vuex'

import login from './modules/login';
import home from './modules/home';

Vue.use(Vuex);

const store = new Vuex.Store({
    state:{
        token : "Bearer eyJhbGciOiJIUzI1NiIsImNhbGciOiJHWklQIn0.H4sIAAAAAAAAAFXMQQqDMBBG4bvMOgOOmUjiFTxFMvkL6aJII7VFvLvtstvHxzuo9U4z3feNO56vZiBHLW80SxCJkw7RO8J7_QX1Osrgg6NHuf2LvLYFn-9JUs0RvrKhBFbFxNnSyBWarEQrFULnBWPus9N4AAAA.ziRA3yyD0E-IKlv7Ry-UN685J7s3RIDAZqZlnm-AczQ"
    },
    modules: {
        login: {
            namespaced: true,
            ...login
        },
        home: {
            namespaced: true,
            ...home
        }
    }
});

export default store;