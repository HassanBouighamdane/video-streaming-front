import {Component, OnInit} from '@angular/core';

import {Router} from "@angular/router";
import {Video} from "../../../types/video";
import {Comment} from "../../../types/comment"
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit{
  public video!: Video;
  recommendedVideos: Video[] = [];
  comments: Comment[] = [];
  newComment: string = '';
  liked: boolean = false;
  disliked: boolean = false;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.loadVideo();
    this.loadRecommendedVideos();
    this.loadComments();
  }
  loadVideo(): void {
    const videoId = '1'
    // Fetch video details from backend based on videoId
    // Placeholder data below
    this.video = {
      id: videoId || '',
      title: 'Sample Video Title',
      description: 'This is the video description...',
      frontImageUrl: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      duration: 360,
      watchNumber: 1000,
      published: new Date(),
      categories: ['Music', 'Live'],
      likes:100,
      dislikes:20
    };
  }

  loadRecommendedVideos(): void {
    // Fetch recommended videos from backend
    // Placeholder data
    this.recommendedVideos = [
      {
        id: '2',
        title: 'Recommended Video 1',
        description: '',
        frontImageUrl: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        videoUrl: '',
        duration: 180,
        watchNumber: 2000,
        published: new Date(),
        categories: ['Music'],
        likes:100,
        dislikes:20
      },
      {
        id: '3',
        title: 'Recommended Video 2',
        description: '',
        frontImageUrl: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
        videoUrl: '',
        duration: 240,
        watchNumber: 3000,
        published: new Date(),
        categories: ['Gaming'],
        likes:100,
        dislikes:20
      },
    ];
  }

  loadComments(): void {
    // Fetch comments from backend
    // Placeholder data
    this.comments = [
      {
        user: 'User 1',
        text: 'Great video!',
        date: new Date(),
      },
      {
        user: 'User 2',
        text: 'Very informative, thanks!',
        date: new Date(),
      },
    ];
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.comments.push({
        user: 'Current User',
        text: this.newComment,
        date: new Date(),
      });
      this.newComment = '';
    }
  }

  navigateToVideo(id: string): void {
    // Logic to navigate to a different video by ID
    // Typically using Angular Router
  }

  // Like/Dislike functionality
  toggleLike(): void {
    if (!this.liked) {
      this.video.likes++;
      if (this.disliked) {
        this.video.dislikes--;
        this.disliked = false;
      }
    } else {
      this.video.likes--;
    }
    this.liked = !this.liked;
  }

  toggleDislike(): void {
    if (!this.disliked) {
      this.video.dislikes++;
      if (this.liked) {
        this.video.likes--;
        this.liked = false;
      }
    } else {
      this.video.dislikes--;
    }
    this.disliked = !this.disliked;
  }

}
