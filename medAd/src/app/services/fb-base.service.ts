import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Rekord } from '../shared/models/rekord.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  get(collectionName: string): Observable<Rekord[]>{
    return this.afs.collection(collectionName).valueChanges() as Observable<Rekord[]>;
  }

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

  getById(collectionName: string, identifier: string): Observable<any> {
    return this.afs.collection(collectionName).doc(identifier).valueChanges();
  }

  update(collectionName: string, identifier: string, data: any) {
    return this.afs.collection(collectionName).doc(identifier).update(data);
  }

  delete(collectionName: string, identifier: string) {
    return this.afs.collection(collectionName).doc(identifier).delete();
  }
}
