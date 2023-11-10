import { Component, OnInit } from '@angular/core';
//import { ApiService } from './services/api.service'; // Asumiendo que tienes un servicio llamado ApiService

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.component.html',
  styleUrls: ['./agendar.component.css']
})
export class AgendarComponent implements OnInit {
  professions: any[] = [];
  professionals: any[] = [];
  selectedProfession: string = '';
  selectedProfessional: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getProfessions();
    this.getProfessionals();
  }

  getProfessions(): void {
    this.apiService.getProfessions().subscribe(
      (data: any) => {
        this.professions = data;
      },
      (error: any) => {
        console.error('Error al obtener profesiones', error);
      }
    );
  }

  getProfessionals(): void {
    this.apiService.getProfessionals().subscribe(
      (data: any) => {
        this.professionals = data;
      },
      (error: any) => {
        console.error('Error al obtener profesionales', error);
      }
    );
  }

  confirmarReserva(): void {
    // Lógica para confirmar la reserva y enviar los datos al backend
    // Puedes utilizar this.selectedProfession, this.selectedProfessional y otros datos del formulario
  }
}
