import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  Values: any = null;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }
  private getValues() {
    this.http.get('http://localhost:5000/api/values').subscribe(response => { this.Values = response; },
     error => { console.log(error); });
  }
}
