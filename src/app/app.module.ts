import { MedicosComponent } from './intermedio/espias/medicos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/rutas/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RUTAS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
