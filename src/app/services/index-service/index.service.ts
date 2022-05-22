import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {interval, firstValueFrom} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(protected _http: HttpClient) {
  }

  public readonly resourceUrl: string = `${environment.apiURL}`;
  public readonly apiKey: string = environment.apiKey;

  public async getCollectionRequest(culture: string, search: string) {
    //let collection = await this._http.get<any[]>(`${this.resourceUrl}/${culture}/collection?key=${this.apiKey}&involvedMaker=${search}`,);
    return await firstValueFrom(this._http.get<any[]>(`${this.resourceUrl}/${culture}/collection?key=${this.apiKey}&involvedMaker=${search}`,));


  }

  public async getDetailsRequest() {
  }

}
