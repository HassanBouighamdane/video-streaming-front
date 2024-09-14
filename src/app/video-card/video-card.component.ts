import {Component, Input} from '@angular/core';
import {Video} from "../../types/video";
import {Router} from "@angular/router";

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  @Input() video!: Video;

  constructor(private router:Router) {

  }

  AccessChannel() {
    this.router.navigateByUrl("/history");
  }

  onVideoClick(id: string) {
    this.router.navigateByUrl(`/video`);
   // this.router.navigate(['/video', this.video.id]);
  }

  onChannelClick() {

  }
}
