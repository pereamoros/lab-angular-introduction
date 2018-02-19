import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Array<string> = ['Aquest article és molt bo! te\'l recomano.'];

  // comments: Array<{}> = [{
  //   name: '',
  //   text: ''
  // }];
  
  constructor() { }

  addComment(input){
    this.comments.push(input.value.comment)
    console.log(this.comments);
  }

  ngOnInit() {
  }

}
