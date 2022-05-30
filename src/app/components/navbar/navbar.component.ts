import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  public goHome() {
    this.router.navigate(['index']);
  }


  useLanguage(): void {
    if (this.translate.currentLang == "en")
      this.translate.use("nl");
    else
      this.translate.use("en");
  }
}
