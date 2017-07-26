import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-listing-scenes',
  templateUrl: './listing-scenes.component.html',
  styleUrls: ['./listing-scenes.component.css']
})
export class ListingScenesComponent implements OnInit {

  id:any;
  scenes:any;
  imageUrl:any;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { } 

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    //this.imageUrl = "https://firebasestorage.googleapis.com/v0/b/storiesmanagment-26a90.appspot.com/o/listingimages%2Fred%20riding%20hood.jpg?alt=media&token=c921b4aa-7cac-424e-bca8-cf2963e22763";

    this.firebaseService.getScene(this.id).subscribe(scenes => {
      console.log(scenes+" EgzonARifi");
      this.scenes = scenes;

    });
  }
}
