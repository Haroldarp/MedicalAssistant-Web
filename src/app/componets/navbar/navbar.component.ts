import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() SearchBar:boolean;

  faSignOutAlt = faSignOutAlt;

  constructor() {
    this.SearchBar = false;
  }

  ngOnInit(): void {
  }

}
