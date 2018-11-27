import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViniloListComponent } from './vinilo-list/vinilo-list.component';
import { ViniloService } from './vinilo.service';
import { HttpClientModule } from '@angular/common/http';
import { ViniloComponent } from './vinilo-detail/vinilo.component';
import { CancionModule } from '../canciones/canciones.module';
import { RouterVinylAppModule } from '../router-module/router.module';
import { ComentarioModule } from '../comentario/comentario.module'
import { ViniloCreateComponent } from './vinilo-create/vinilo-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViniloEditComponent } from './vinilo-edit/vinilo-edit.component';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CancionModule,
    RouterVinylAppModule,
    ComentarioModule,
    FormsModule,
    NgxPermissionsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    
    
  ],
  declarations: [
    ViniloListComponent,
    ViniloComponent,
    ViniloCreateComponent,
    ViniloEditComponent,
  ],
  providers: [
    ViniloService,
    ViniloCreateComponent,
    ViniloEditComponent,
    ViniloComponent,
    
  ],
  exports: [
    ViniloListComponent,
    ViniloComponent,
    ViniloCreateComponent,
    ViniloEditComponent
  ]
})
export class ViniloModule { }