import { combineEpics, ofType } from 'redux-observable';
import { map,ignoreElements,tap,mergeMap } from 'rxjs/operators';


const hello = (actions$) => actions$.pipe(
   ofType('UPDATE_PASS'),
    tap(({type, payload})=> console.log(payload)),
    mergeMap(()=>fetch('https://random-data-api.com/api/stripe/random_stripe').then((res)=>(res.json()))),
    tap((response)=> console.log(response)),
    map((data)=> ({type:'UPDATE', payload: data})),
) 

export default combineEpics(hello);