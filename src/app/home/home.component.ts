import {Component, OnInit} from '@angular/core';
import {Video} from "../../types/video";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public videos:Video[]=[];
  constructor() {
  }

  ngOnInit(): void {
    this.videos=[{
      id:"1",
      title:"Video title 5",
      description:"Video",
      frontImageUrl:"https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      videoUrl:"",
      duration:12,
      watchNumber:500,
      published:new Date(`2022-06-06T00:00:00.000Z`),
      categories:[],
    },
      {
        id:"2",
        title:"Video title 1",
        description:"Video",
        frontImageUrl:"https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        videoUrl:"",
        duration:12,
        watchNumber:500,
        published:new Date(`2022-06-06T00:00:00.000Z`),
        categories:[],
      },
      {
        id:"3",
        title:"Video title",
        description:"Video 2",
        frontImageUrl:"https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        videoUrl:"",
        duration:12,
        watchNumber:500,
        published:new Date(`2022-06-06T00:00:00.000Z`),
        categories:[],
      },
      {
        id:"4",
        title:"Video title 3",
        description:"Video",
        frontImageUrl:"https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        videoUrl:"",
        duration:12,
        watchNumber:500,
        published:new Date(`2022-06-06T00:00:00.000Z`),
        categories:[],
      },
      {
        id:"5",
        title:"Video title 4",
        description:"Video",
        frontImageUrl:"https://images.pexels.com/photos/28219391/pexels-photo-28219391/free-photo-of-the-dolomites-in-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        videoUrl:"",
        duration:12,
        watchNumber:500,
        published:new Date(`2022-06-06T00:00:00.000Z`),
        categories:[],
      }
    ]
  }


}
