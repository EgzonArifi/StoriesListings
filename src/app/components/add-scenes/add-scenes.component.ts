import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-add-scenes',
  templateUrl: './add-scenes.component.html',
  styleUrls: ['./add-scenes.component.css']
})
export class AddScenesComponent implements OnInit {

  id;
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
    this.firebaseService.getScenes(this.id).subscribe(scenes => {
      
      console.log(scenes);
    });
  }

  onAddSceneSubmit(){
    let listing = {
      title: this.title,
      description: this.description,
      image: this.image
    }

    this.firebaseService.addScene(this.id,listing);

    this.router.navigate(["['/add-scenes/'+id]"]);
  }
}
