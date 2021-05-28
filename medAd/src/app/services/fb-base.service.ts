import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Rekord } from '../shared/models/rekord.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  async add(collectionName: string, data: Rekord, identifier?: string): Promise<string> {
    const uid = identifier ? identifier : this.afs.createId();
    data.identifier = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  // tslint:disable-next-line: typedef
  weakAdd(collectionName: string, data: Rekord) {
    return this.afs.collection(collectionName).add(data);
  }
}
