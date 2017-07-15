import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id;
  parentStoryId:any;
  title;
  description;
  image;

  constructor(
    private firebaseService:FirebaseService,
    private router: Router,
    private route: ActivatedRoute
  ) { } 

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.parentStoryId = this.route.snapshot.params['parentId'];
    this.firebaseService.getSceneDetails(this.parentStoryId,this.id).subscribe(listing => {
      this.title = listing.title;
      this.description = listing.description;

      console.log(this.title);
    });
  }

  onEditSubmit(){
    let listing = {
      title: this.title,
      description: this.description,

    }

    this.firebaseService.updateScene(this.id, listing);

    this.router.navigate(['/listing-scenes',this.parentStoryId]);
  }

}
