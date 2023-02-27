import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { fromFetch } from 'rxjs/fetch';
import { switchMap, of, catchError } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 

  constructor(){}

 products:any=[];
  data$ = fromFetch('https://dummyjson.com/products').pipe(
  switchMap(response => {
    if (response.ok) {
      return response.json();
    } else {
      // Server is returning a status requiring the client to try something else.
      return of({ error: true, message: `Error ${ response.status }` });
    }
  }),
  catchError(err => {
    // Network or other error, handle appropriately
    console.error(err);
    return of({ error: true, message: err.message })
  })
).subscribe((data)=>{
 console.log(data);
 this.products=data.products
 console.log( this.products)
} )
}