import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DetailsService} from "../../services/details-service/details.service";
import {TranslateService} from "@ngx-translate/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  displayStyle = "none";
  object: any = [];
  artObject: any = [];
  hasSearched: boolean = false;
  artId: string = '';
  language: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private detailsService: DetailsService, private translate: TranslateService, private modalService: NgbModal) {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('id') != null) {
        // @ts-ignore
        this.artId = params.get('id').toString();
      }
    });
    translate.onLangChange.subscribe(lang => {
      if (this.object.length != 0)
        this.executeSearch();
    })
  }

  ngOnInit(): void {
    this.executeSearch().then(r => console.log("success"))
    this.language = this.translate.currentLang;
  }

  async executeSearch() {
    await this.detailsService.getDetailRequest(this.artId).then(r => {
      this.object = JSON.parse(JSON.stringify(r));
    });
    this.hasSearched = true;
    this.artObject = this.object['artObject'];
  }

  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
}
