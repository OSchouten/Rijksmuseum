import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(protected _http: HttpClient) {
  }

  public readonly resourceUrl: string = `${environment.apiURL}/[culture]/collection?key=`;


  public async getRequest() {
    let notes = await this._http.get<any[]>(`${this.resourceUrl}/`,).toPromise();
    let result = [];
  }
}
