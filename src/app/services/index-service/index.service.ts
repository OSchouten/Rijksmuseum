import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {firstValueFrom} from 'rxjs';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class IndexService {

  public readonly resourceUrl: string = `${environment.apiURL}`;
  public readonly apiKey: string = environment.apiKey;
  public artCollection: any = [];

  constructor(protected _http: HttpClient, private translate: TranslateService) {
  }

  public order() {

  }

  public async getCollectionRequest(searchString: string, range: number) {

    this.artCollection = firstValueFrom(this._http.get<Object>(`${this.resourceUrl}/${this.translate.currentLang}/collection?key=${this.apiKey}&q=${searchString}&ps=${range}`));
    return await this.artCollection;
  }

  public sentObject() {
    return this.artCollection;
  }
}
