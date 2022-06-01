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

  public async getCollectionRequest(searchString: string, range: number, imgOnly: boolean, datingPeriod: number, technique: string, material: string, artist: string, type: string) {

    const myURL = new URL(`${this.resourceUrl}/${this.translate.currentLang}/collection`);
    myURL.searchParams.append("key", this.apiKey);
    myURL.searchParams.append("ps", String(range));
    myURL.searchParams.append("q", searchString);

    if (artist != "")
      myURL.searchParams.append("involvedMaker", artist.toLowerCase());
    if (type != "")
      myURL.searchParams.append("type", type.toLowerCase());
    if (material != "")
      myURL.searchParams.append("material", material.toLowerCase());
    if (technique != "")
      myURL.searchParams.append("technique", technique.toLowerCase());
    if (datingPeriod != 0)
      myURL.searchParams.append("f.dating.period", String(datingPeriod));
    if (imgOnly)
      myURL.searchParams.append("imgonly", "True");

    console.log(myURL.href);

    this.artCollection = firstValueFrom(this._http.get<Object>(myURL.toString()));
    return await this.artCollection;
  }

  public sentObject() {
    return this.artCollection;
  }
}
