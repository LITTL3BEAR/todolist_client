import { Component } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';
  datas: any[]

  constructor(private http: HttpClient) {

  }

  getTodos() {
    this.http.get('http://localhost:3000/todo').subscribe((results: any[]) => {
      this.datas = results
    })
  }
}