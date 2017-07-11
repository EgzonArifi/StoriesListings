import { Injectable } from '@angular/core';
import { AngularFire,AuthProviders,AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;
  sceneList: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  scene: FirebaseObjectObservable<any>;
  folder: any;

  constructor(private af: AngularFire) {
    this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
    this.folder = 'listingimages';
  }

  loginWithEmail(email, password) {
    return this.af.auth.login({
        email: email,
        password: password,
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      });
  }


  getListings(){

    return this.listings;
  }

  getListingDetails(id){
    this.listing = this.af.database.object('/listings/'+id) as FirebaseObjectObservable<Listing>
    return this.listing;
  }

  updateListing(id, listing){
    return this.listings.update(id, listing);
  }

  deleteListing(id){
    return this.listings.remove(id);
  }

  addListing(listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.listings.push(listing);
      });
    }
  }
  getScene(id) {
    this.sceneList = this.af.database.list('/'+id) as FirebaseListObservable<Listing[]>
    return this.sceneList;
  }
  getSceneDetails(sceneid,id){
    this.scene = this.af.database.object('/'+sceneid+'/'+id) as FirebaseObjectObservable<Listing>
    return this.scene;
  }
  updateScene(id, scene){
    return this.sceneList.update(id, scene);
  }
  deleteScene(id){
    return this.sceneList.remove(id);
  }
  addScene(id,listing){
    // Create root ref
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        listing.image = selectedFile.name;
        listing.path = path;
        return this.sceneList.push(listing);
      });
    }
  }
}


interface Listing {
  $key?:string;
  title?:string;
  description?:string;
  image?:string;
}
