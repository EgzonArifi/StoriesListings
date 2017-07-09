import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  id:any;
  parentStoryId:any;
  listing: any;
  imageUrl:any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];
    this.parentStoryId = this.route.snapshot.params['parentId'];
    console.log("this.parentStoryId"+this.parentStoryId);

    this.firebaseService.getSceneDetails(this.parentStoryId, this.id).subscribe(scenes => {
      console.log(scenes+" EgzonArifi");
      this.listing = scenes;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(this.listing.path);

      storageRef.child(this.listing.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }
  onDeleteClick(){
     this.firebaseService.deleteScene(this.id);
     this.router.navigate(['/listing-scenes/',this.parentStoryId]);
   }

}
