class WebApiService {
    _endpoint = "";
    constructor(endpoint) {
        this._endpoint = endpoint;
    }
    _call = (data) => fetch(_endpoint, data);
    get = (data) => {
        data.method = "GET";
        _call(endpoint, data).then()
    };

}

export { WebApiService };