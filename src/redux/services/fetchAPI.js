import axios from "axios"

export const GenericFetchAPi = (url, data, callback) => {
    const resStruct = {
        status: "",
        data: "",
    }
    const options = {
        url: url,
        data: data
    }
    axios(options).then(res => {
        if (res.code === 200) {
            resStruct.status = "success"
            resStruct.data = res
            callback(resStruct)
        } else if (res === "failure") {
            resStruct.status = "failure"
            resStruct.data = res
            callback(resStruct)
        }
    }).catch(err => {
        resStruct.status = "failed"
        resStruct.data = err
        callback(resStruct)
    })

}