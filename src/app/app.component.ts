import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  public appPages = [
    {
      title: "Home",
      url: "/index",
      icon: "home"
    },
    {
      title: "Inventory",
      url: "/display",
      icon: "cube"
    },
    {
      title: "Employee",
      url: "/employee",
      icon: "people"
    },
    {
      title: "Purchase",
      url: "/purchase",
      icon: "cart"
    },
    {
      title: "Sales",
      url: "/sales",
      icon: "card"
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
