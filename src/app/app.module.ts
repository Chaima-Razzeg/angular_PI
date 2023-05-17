import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassesComponent } from './classes/classes.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { FormsModule } from '@angular/forms';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { HttpClientModule } from '@angular/common/http';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { EnfantsComponent } from './enfants/enfants.component';
import { AddEnfantComponent } from './add-enfant/add-enfant.component';
import { UpdateEnfantComponent } from './update-enfant/update-enfant.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DetailEnfantComponent } from './detail-enfant/detail-enfant.component';
import { DetailEnseignantComponent } from './detail-enseignant/detail-enseignant.component';


@NgModule({
  declarations: [
    AppComponent,
    ClassesComponent,
    AddClasseComponent,
    UpdateClasseComponent,
    EnseignantComponent,
    AddEnseignantComponent,
    UpdateEnseignantComponent,
    EnfantsComponent,
    AddEnfantComponent,
    UpdateEnfantComponent,
    DashbordComponent,
    DetailEnfantComponent,
    DetailEnseignantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
