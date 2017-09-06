import { Component, OnInit } from '@angular/core';

export interface MenuItem {
  name: string;
  url: string;
  items?: MenuItem[];
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuObj: MenuItem[];

  constructor() {
    this.menuObj = [
      {
        "name": "Meeting Center",
        "url": "a.html",
        "items": [
          {
            "name": "Meet Now",
            "url": "meeting/meet-now.html"
          },
          {
            "name": "Schedule",
            "url": "meeting/schedule.html"
          },
          {
            "name": "My Calendar",
            "url": "meeting/my-calendar.html"
          },
          {
            "name": "Find Events",
            "url": "meeting/find-events.html"
          }
        ]
      },
      {
        "name": "Reports",
        "url": "b.html",
        "items": [
          {
            "name": "My Usage",
            "url": "reports/my-usage.html"
          }
        ]
      },
      {
        "name": "Support",
        "url": "c.html",
        "items": [
          {
            "name": "Contact",
            "url": "support/contact.html"
          }
        ]
      }
    ];
  }

  ngOnInit() {
  }


}
