import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    this.filterComments();
  };

  title = 'Steve Jobs Fan Page';

  new_comment = '';

  negative_words = 'lorem';

  comments = [
    'Lorem Ipsum is simply dummy text of the printing',
    'and typesetting industry. Lorem Ipsum has been the',
    'industry\'s standard dummy text ever since the 1500s'
  ];

  addComment(){
    if(this.new_comment.length > 2){
      this.comments.push(this.new_comment);
      this.new_comment = '';
    }

    this.filterComments();
  }

  filterComments(){
    let words = this.negative_words.split(',').map(function(item){
       return item.toLocaleLowerCase().trim();
    });
    // console.log(words)


    // lets see in comments for bad words
    this.comments.forEach((comment, index) => {
      comment = comment.toLocaleLowerCase().trim();
      for(let word of words){
        // console.log(word);
        if(comment.indexOf(word) !== -1){
            delete this.comments[index]
        }
      }
    });
  }

}
