import { Observable } from 'rxjs';

import { db } from './firebase';

const Collection$ = (collectionPath) => new Observable((observer) => db
    .collection(collectionPath)
    .onSnapshot(
        (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                observer.next(doc.data());
            });
        },
        (error) => observer.error(error),
        () => observer.complete(),
    ));

const Document$ = (collectionPath, documentPath) => new Observable((observer) => db
    .collection(collectionPath).doc(documentPath)
    .onSnapshot(
        (doc) => {
            observer.next(doc.data());
        },
        (error) => observer.error(error),
        () => observer.complete(),
    ));

export { Collection$, Document$ };
