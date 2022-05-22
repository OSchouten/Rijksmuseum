import {Component, OnInit} from '@angular/core';
import {IndexService} from "../../services/index-service/index.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private indexService: IndexService) {

  }

  ngOnInit(): void {
  }

  onClick() {
    this.indexService.getCollectionRequest("nl", "Rembrandt+van+Rijn").then(r => console.log(r));
  }

}
