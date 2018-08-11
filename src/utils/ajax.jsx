'use strict';
import axios from 'axios';
import qs from 'querystring';

const $axios = axios.create({
    withCredentials: true,
    timeout: 10000
});

const errorMsg = (error) =>{
    if(error.message == 'Network Error' || error.response.status >= 400) {
        return {isSuccess: false, data: error.message}
    }
}

export default class http {
    /**
     * ajax get
     * @param url
     * @param params
     * @returns {Promise<*>}
     */
    static async get(url, params){
        try{
            let query = await qs.stringify(params)
            if(params){
                return await $axios.get(url + '?' + query)
            }
            return await $axios.get(url)
        }catch(error){
            return errorMsg(error)
        }
    }

    /**
     * ajax post
     * @param url
     * @param params
     * @returns {Promise<*>}
     */
    static async post(url, params){
        try{
            return await $axios.post(url, params)
        }catch(error){
            return errorMsg(error)
        }
    }

    /**
     * ajax pathch
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    static async patch(url, params){
        try {
            return await $axios.patch(url, params)
        }catch (error){
            return errorMsg(error)
        }
    }

    /**
     * ajax put
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    static async put(url, params){
        try{
            return await $axios.put(url, params)
        }catch (error){
            return errorMsg(error)
        }
    }

    /**
     * ajax delete
     * @param url
     * @param params
     * @returns {Promise<void>}
     */
    static async delete(url, params){
        try{
            return await $axios.delete(url, params)
        } catch (error){
            return errorMsg(error)
        }
    }
}