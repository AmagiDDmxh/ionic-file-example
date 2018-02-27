import { Component, OnInit } from '@angular/core'
import { NavController, Platform } from 'ionic-angular'
import { File } from '@ionic-native/file'

const ROOT_DIRECTORY = 'file:///'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  items = []

  constructor (public navCtrl: NavController, public file: File, public plt: Platform) {

  }

  ngOnInit () {
    this.plt.ready().then(_=> this.listDir())
  }

  listDir () {
    this.file.listDir(ROOT_DIRECTORY, '')
      .then(entries => {
        console.log(entries)
        this.items = entries
      })
      .catch(this.handleError)
  }

  handleError = (err) => console.log(err)
}
