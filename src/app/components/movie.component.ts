import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'movie',
    templateUrl: 'movie.component.html',
    providers: [PostsService]
})
export class MovieComponent  {
  name: string;
  movies2016: string[];
  movies2015: string[];
  missing2016: string;
  show2015: boolean;
  show2016: boolean;
  posts:Post[];

  constructor(private postsService: PostsService){
    this.name = 'Joel';
    this.email = 'joeltwaage@gmail.com';
    this.movies2016 = ['Moonlight','The VVitch','Elle','The Lobster','Jackie','Mancheego by the Cheese','OJ: Made in America','A Monster Calls','Hunt for the Wilderpeople','Captain Fantastic'];
    this.missing2016='',
    this.movies2015 = ['Mad Max: Fury Road','Spotlight','Spy','Carol','Hateful 8','Anomalisa','Steve Jobs','Inside Out','The Martian','Sicario'];
    this.show2016 = false;
    this.show2015 = false;

    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }

  toggle2016(){
    if(this.show2016 == true){
      this.show2016 = false;
    } else {
      this.show2016 = true;
    }
  }

  toggle2015(){
    if(this.show2015 == true){
      this.show2015 = false;
    } else {
      this.show2015 = true;
    }
  }
  addMovie2015(movie2015){
    this.movies2015.push(movie2015);
  }
  deleteMovie2015(i){
    this.movies2015.splice(i, 1);
  }
}

interface Post{
  id: number;
  title: string;
  body: string;
}
