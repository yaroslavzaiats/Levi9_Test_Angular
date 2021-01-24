import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Photo, Post, User } from "./interfaces";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ActivationService {
    activatedUsers: User[] = []
    activatedPosts: Post[] = []
    activatedPhotos: Photo[] = []

    isEmptyPhotos: boolean = true
    isEmptyPosts: boolean = true
    isEmptyUsers: boolean = true

    constructor(
        private usersRequest: HttpClient,
        private postsRequest: HttpClient,
        private photosRequest: HttpClient
    ) {

    }

    getUsers(): Observable<User[]>{
       return this.usersRequest.get<User[]>('https://jsonplaceholder.typicode.com/users?_limit=9')
    }

    getPosts(): Observable<Post[]> {
        return this.postsRequest.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=9')
    }

    getPhotos(): Observable<Photo[]> {
        return this.photosRequest.get<Photo[]>('https://jsonplaceholder.typicode.com/photos?_limit=9')
    }

    activateUser(user: User) {
        user.isActive = !user.isActive
        this.activatedUsers.push(user)
        this.isEmptyUsers = false
    }

    deactivateUser(user: User) {
        user.isActive = !user.isActive
        this.activatedUsers.splice(this.activatedUsers.indexOf(user), 1)
        if(this.activatedUsers.length === 0){
            this.isEmptyUsers = true
        }
    }
    


    updateActivatedUsers(users: User[]): User[] {
        users.map(user => {
            const activatedUser = this.activatedUsers.find(u => u.id === user.id)          
            
            if(activatedUser !== undefined && user.id === activatedUser.id){
              user.isActive = true
            }
        })
        return users
    }

    activatePost(post: Post) {
        post.isActive = !post.isActive
        this.activatedPosts.push(post)
        this.isEmptyPosts = false
    }

    deactivatePost(post: Post) {
        post.isActive = !post.isActive
        this.activatedPosts.splice(this.activatedPosts.indexOf(post), 1)
        if(this.activatedPosts.length === 0){
            this.isEmptyPosts = true
        }
    }
    


    updateActivatedPosts(posts: Post[]): Post[] {
        posts.map(post => {
            const activatedPost = this.activatedPosts.find(p => p.id === post.id)          
            
            if(activatedPost !== undefined && post.id === activatedPost.id){
                post.isActive = true
            }
        })
        return posts
    }

    activatePhoto(photo: Photo) {
        photo.isActive = !photo.isActive
        this.activatedPhotos.push(photo)
        this.isEmptyPhotos = false
    }

    deactivatePhoto(photo: Photo) {
        photo.isActive = !photo.isActive
        this.activatedPhotos.splice(this.activatedPhotos.indexOf(photo), 1)
        if(this.activatedPhotos.length === 0){
            this.isEmptyPhotos = true
        }
    }
    


    updateActivatedPhotos(photos: Photo[]): Photo[] {
        photos.map(photo => {
            const activatedPhoto = this.activatedPhotos.find(p => p.id === photo.id)          
            
            if(activatedPhoto !== undefined && photo.id === activatedPhoto.id){
                photo.isActive = true
            }
        })
        return photos
    }

}