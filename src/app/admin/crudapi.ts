import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class crudapi {

    constructor(private fs: AngularFirestore) { }

    //CRUD
    //read
    readData() {
        return this.fs.collection('data').snapshotChanges();
    }

    //delete
    delData(docId: any){
        return this.fs.doc('data/'+ docId).delete();

    }

    createData(tmpdoc: any){
        return this.fs.collection('data').add(tmpdoc);
    }

    updateData(docId: any, tmpdoc: any){
        return this.fs.doc('data/'+docId).update(tmpdoc);
    }

}
