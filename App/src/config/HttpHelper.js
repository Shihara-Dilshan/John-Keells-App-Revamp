import axios from 'axios';
import { baseUrl } from './config';

export default class HttpHelper {
  static get = async (url, headers = {}) => {
    commonHeader = await HttpHelper.commonHeaders();
    commonUrl = `${baseUrl}${url}`;

    const finalHeaders = {
      ...commonHeader,
      ...headers,
    };
    return new Promise((resolve, reject) => {
      axios
        .get(commonUrl, finalHeaders)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };

  static post = async (url, data = {}, headers = {}) => {
    commonHeader = await HttpHelper.commonHeaders();
    commonUrl = `${baseUrl}${url}`;

    const finalHeaders = {
      ...commonHeader,
      ...headers,
    };
    return new Promise((resolve, reject) => {
      axios
        .post(commonUrl, data, finalHeaders)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };

  static put = async (url, data = {}, headers = {}) => {
    commonHeader = await HttpHelper.commonHeaders();
    commonUrl = `${baseUrl}${url}`;

    const finalHeaders = {
      ...commonHeader,
      ...headers,
    };
    return new Promise((resolve, reject) => {
      axios
        .put(commonUrl, data, finalHeaders)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };

  static patch = async (url, data = {}, headers = {}) => {
    commonHeader = await HttpHelper.commonHeaders();
    commonUrl = `${baseUrl}${url}`;

    const finalHeaders = {
      ...commonHeader,
      ...headers,
    };
    return new Promise((resolve, reject) => {
      axios
        .patch(commonUrl, data, finalHeaders)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };

  static delete = async (url, data = {}, headers = {}) => {
    commonHeader = await HttpHelper.commonHeaders();
    commonUrl = `${baseUrl}${url}`;

    const finalHeaders = {
      ...commonHeader,
      ...headers,
    };
    return new Promise((resolve, reject) => {
      axios
        .delete(commonUrl, data, finalHeaders)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  };

  static commonHeaders = async () => {
    return {
      token: 'will coming from async storage',
    };
  };
}
