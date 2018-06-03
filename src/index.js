import { Observable, of } from 'rxjs'
import { map } from 'rxjs/operators/'
// import { of } from 'rxjs/observable/of'

const source$ = of(1,2,3)
source$.subscribe(console.log, null, () => console.log('completed'))

source$.pipe(map((value, i) => `${value}_${i}`)).subscribe(console.log)