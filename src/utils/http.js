wx.$token = "Bearer eyJhbGciOiJIUzI1NiIsImNhbGciOiJHWklQIn0.H4sIAAAAAAAAAFXMQQqDMBBG4bvMOgOOmUjiFTxFMvkL6aJII7VFvLvtstvHxzuo9U4z3feNO56vZiBHLW80SxCJkw7RO8J7_QX1Osrgg6NHuf2LvLYFn-9JUs0RvrKhBFbFxNnSyBWarEQrFULnBWPus9N4AAAA.ziRA3yyD0E-IKlv7Ry-UN685J7s3RIDAZqZlnm-AczQ";
const defaultParam = {
    method: 'GET',
    header: {"Authorization":wx.$token}
}
wx.$ajax = (opts) => {
    return new Promise((resolve,reject)=>{
        opts.success = function(res){
            resolve(res);
        }
        opts.fail = function (err) {
            reject(err);
        }
        // 合并参数对象
        Object.assign(defaultParam, opts);
        // 发起request请求
        wx.request(defaultParam);
    })
}