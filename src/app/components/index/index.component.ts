import {Component, OnInit} from '@angular/core';
import {IndexService} from "../../services/index-service/index.service";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css', './index.component.scss']
})
export class IndexComponent implements OnInit {
  searchInput: string = "";
  artCollection: any = [];
  hasSearched: boolean = false;

  constructor(private indexService: IndexService, private translate: TranslateService) {
  }

  ngOnInit(): void {
  }

  async executeSearch() {
    let culture = this.translate.currentLang;

    await this.indexService.getCollectionRequest(culture, this.searchInput).then(r => {
      this.artCollection = JSON.parse(JSON.stringify(r));

    });
    this.hasSearched = true;
  }
}
