import { Component, OnInit } from '@angular/core'
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private webView: InAppBrowser) {}

  ngOnInit(): void {
    const browser = this.webView.create(
      'https://ionicframework.com/',
      '_blank',
      {
        location: 'no',
        toolbar: 'no',
        zoom: 'no',
        hidespinner: 'yes',
        usewkwebview: 'yes',
        fullscreen: 'no',
      },
    )

    browser?.on('loadstop')?.subscribe((event) => {
      console.log('LOADSTOP')
    })
  }
}
