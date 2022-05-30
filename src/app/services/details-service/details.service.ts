import {Injectable} from '@angular/core';
import {firstValueFrom} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  public readonly resourceUrl: string = `${environment.apiURL}`;
  public readonly apiKey: string = environment.apiKey;

  constructor(protected _http: HttpClient, private translate: TranslateService) {
  }

  public async getDetailRequest(artId: string) {
    return await firstValueFrom(this._http.get<Object>(`${this.resourceUrl}/${this.translate.currentLang}/collection/${artId}?key=${this.apiKey}`));
  }
}
