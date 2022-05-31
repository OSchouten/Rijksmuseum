import {Component, OnInit} from '@angular/core';
import {IndexService} from "../../services/index-service/index.service";
import {TranslateService} from "@ngx-translate/core";
import {PaginationService} from "ngx-pagination";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', './index.component.scss']
})
export class IndexComponent implements OnInit {
  searchInput: string = "";
  artCollection: any = [];
  hasSearched: boolean = false;
  p: number = 1;
  range: number = 10;

  constructor(private indexService: IndexService, private translate: TranslateService, private paginate: PaginationService, private route: ActivatedRoute, private router: Router) {
    translate.onLangChange.subscribe(lang => {
      if (this.artCollection.length != 0)
        this.executeSearch();
    })
  }

  ngOnInit(): void {
    this.getObject();
  }

  public async goToDetail(art: any) {
    this.router.navigate(['detail'], {
      relativeTo: this.route, queryParams: {id: art['objectNumber']}
    });
  }

  getObject() {
    let object = this.indexService.sentObject();
    if (object.length != 0) {
      this.artCollection = JSON.parse(JSON.stringify(object['__zone_symbol__value']));
      this.hasSearched = true;
    }

  }

  async executeSearch() {
    if (this.range > 100 || this.range < 0)
      this.range = 10;

    this.artCollection.clear;
    await this.indexService.getCollectionRequest(this.searchInput, this.range).then(r => {
      this.artCollection = JSON.parse(JSON.stringify(r));
    });
    this.hasSearched = true;
    console.log(this.artCollection)
  }
}
