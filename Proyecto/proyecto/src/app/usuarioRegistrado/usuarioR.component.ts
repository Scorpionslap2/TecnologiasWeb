import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-usuarioR',
  templateUrl: './usuarioR.component.html',
  styleUrls: ['./usuarioR.component.css']
})
export class UsuarioRComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  // Debes definir una matriz de reservas con la estructura que estés utilizando en tu aplicación
  reservations: Reservation[] = [
    { name: 'Usuario 1', date: '2023-01-15' },
    { name: 'Usuario 2', date: '2023-02-20' },
    // Agrega más reservas según tu lógica o base de datos
  ];

  // Función para eliminar una reserva
  deleteReservation(reservation: Reservation): void {
    const index = this.reservations.indexOf(reservation);
    if (index !== -1) {
      this.reservations.splice(index, 1);
    }
  }
}

interface Reservation {
  name: string;
  date: string;
}
