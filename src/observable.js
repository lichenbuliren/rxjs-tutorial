import { Observable } from 'rxjs/internal/Observable'

let stream$ = Observable.of(1, 2, 3).map(x => x + '!!!')

stream$.subscribe(val => {
  console.log(val) // 1!!! 2!!! 3!!!
})
