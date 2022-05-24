import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {firstValueFrom} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(protected _http: HttpClient) {
  }

  public readonly resourceUrl: string = `${environment.apiURL}`;
  public readonly apiKey: string = environment.apiKey;

  public async getCollectionRequest(culture: string, searchString: string) {
    return await firstValueFrom(this._http.get<Object>(`${this.resourceUrl}/${culture}/collection?key=${this.apiKey}&involvedMaker=${searchString}`));
  }

  public async getDetailsRequest() {
  }

}
