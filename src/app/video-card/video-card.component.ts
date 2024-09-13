import {Component} from '@angular/core';
import {Video} from "../../types/video";
import {Router} from "@angular/router";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  public video: Video ;

  constructor(private router:Router) {
    this.video = this.videoItem;
  }

  videoItem = {
    id:"1",
    title:"Video title",
    description:"Video",
    frontImageUrl:"https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    videoUrl:"",
    duration:12,
    watchNumber:500,
    published:new Date(`2022-06-06T00:00:00.000Z`),
    categories:[],
  };


  AccessChannel() {
    this.router.navigateByUrl("/");
  }
}
