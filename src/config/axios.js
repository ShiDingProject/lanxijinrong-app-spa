import axios from 'axios'
import { API_URL } from "../service/ApiSetting"


//http request 拦截器
// axios.interceptors.request.use(
//     config => {
//         // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//         config.data = JSON.stringify(config.data);
//         config.headers = {
//             'Content-Type': 'application/x-www-form-urlencoded'
//         }
//         // if(token){
//         //   config.params = {'token':token}
//         // }
//         return config;
//     },
//     error => {
//         return Promise.reject(err);
//     }
// );


//http response 拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.data.errCode == 2) {
//             router.push({
//                 path: "/login",
//                 querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         return Promise.reject(error)
//     }
// )

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const ApiDataModule = function (baseURL, params) {
    /**
    * 封装post请求
    * @param url
    * @param data
    * @returns {Promise}
    */
    if (API_URL[baseURL].method === 'POST') {
        return new Promise((resolve, reject) => {
            axios({
              method:'post',
              url: API_URL[baseURL].fetchUrl,
              data: params,
              headers:{
                'Content-Type':'application/x-www-form-urlencoded'
              },
            })
            .then(response => {
              resolve(response.data);
            })
            .catch(err => {
              reject(err)
            })
            // axios.post(API_URL[baseURL].fetchUrl, params)
            //     .then(response => {
            //         resolve(response.data);
            //     })
            //     .catch(err => {
            //         reject(err)
            //     })

        })
    }

    // if (API_URL[baseURL].method === 'POST') {
    //         return axios.post(API_URL[baseURL].fetchUrl, params)
    //             .then(response => {
    //                 return Promise.resolve(response.data);
    //             })
    //             .catch(err => {
    //                 return Promise.reject(err)
    //             })

    // }

    /**
    * 封装get请求
    * @param url
    * @param data
    * @returns {Promise}
    */
    if (API_URL[baseURL].method === 'GET') {
        return new Promise((resolve, reject) => {

            axios.get(API_URL[baseURL].fetchUrl, { params: params })
                .then(response => {
                    resolve(response.data);
                })
                .catch(err => {
                    reject(err)
                })

        })
    }

    /**
    * 封装patch请求
    * @param url
    * @param data
    * @returns {Promise}
    */
    if (API_URL[baseURL].method === 'patch') {

        return new Promise((resolve, reject) => {

            axios.patch(API_URL[baseURL].fetchUrl, params)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err)
                })

        })
    }

    /**
    * 封装put请求
    * @param url
    * @param data
    * @returns {Promise}
    */
    if (API_URL[baseURL].method === 'put') {

        return new Promise((resolve, reject) => {

            axios.put(API_URL[baseURL].fetchUrl, params)
                .then(response => {
                    resolve(response.data);
                }, err => {
                    reject(err)
                })

        })

    }
}

export default ApiDataModule;
