import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../../components/dialogs/error-dialog/error-dialog.component';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        
        // Check if the error is a response error (HTTP status error)
        if (error instanceof HttpErrorResponse) {
          // Handle specific HTTP errors here (e.g., 404, 500)
          if (error.status === 0) {
            errorMessage = 'No internet connection';
          } else if (error.error instanceof ErrorEvent) {
            // Client-side or network error
            errorMessage = `Client-side error: ${error.error.message}`;
          } else if (error.error) {
            // Backend response error (assuming it's a string message)
            errorMessage = error.error || error.message || 'Backend error occurred';
          } else {
            errorMessage = `Backend error: ${error.statusText}`;
          }
        }

        // Open error dialog with the error message
        this.dialog.open(ErrorDialogComponent, {
          data: { message: errorMessage }
        });

        // Return the error to be handled further if needed
        return throwError(error);
      })
    );
  }
}
