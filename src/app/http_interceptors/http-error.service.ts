import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LoadingService } from '../_services/loading.service'; 


@Injectable({
  providedIn: 'root'
})
export class HttpErrorService implements HttpInterceptor{

  constructor(
    private loadding:LoadingService
  ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;
    this.loadding.requestStart();
    
    // extend server response observable with logging
    return next.handle(req)
      .pipe(
        tap({
          // Succeeds when there is a response; ignore other events
          next: (event) => {
            this.loadding.requestEnded();
          },
          // Operation failed; error is an HttpErrorResponse
          error: (error) => {
            this.loadding.resetLoadding();
          }
        }),
        // Log when response observable either completes or errors
      );
  }

}
