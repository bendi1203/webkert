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

  async add(collectionName: string, data: Rekord, azonosito?: string): Promise<string> {
    const uid = azonosito ? azonosito : this.afs.createId();
    data.azonosito = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  // tslint:disable-next-line: typedef
  weakAdd(collectionName: string, data: Rekord) {
    return this.afs.collection(collectionName).add(data);
  }

  getById(collectionName: string, azonosito: string): Observable<any> {
    return this.afs.collection(collectionName).doc(azonosito).valueChanges();
  }

  update(collectionName: string, azonosito: string, data: any) {
    return this.afs.collection(collectionName).doc(azonosito).update(data);
  }

  delete(collectionName: string, azonosito: string) {
    return this.afs.collection(collectionName).doc(azonosito).delete();
  }
}
