import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit{
  title = 'Containers Running on This Machine';
  constructor(private http: HttpClient) {};
  containers = {}
  ngOnInit()
  {

    fetch('http://dev01.dev.onyxgs.com/?ls=true').then((response) =>
    {
      response.json().then((data)=>
      {
        console.log(data)
        this.containers = data
      })
    })
  }
}

