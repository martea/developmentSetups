import { WebApiService } from "./webApiService";
import { AirportModel } from "./../models/AirportModel";

class AirportService {
    _webApi;
    constructor() {
        this._webApi = new WebApiService("/api/Airport");
    }

    get = id => this._webApi.get({ data: { id: id } }).then(_mapToModel);
    list = () => this._webApi.get().then(_mapToModel);
    _mapToModel = data => new AirportModel(data);
}

export default AirportService;