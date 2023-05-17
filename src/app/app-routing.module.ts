import { DetailEnfantComponent } from './detail-enfant/detail-enfant.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './classes/classes.component';
import { AddClasseComponent } from './add-classe/add-classe.component';
import { UpdateClasseComponent } from './update-classe/update-classe.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { AddEnseignantComponent } from './add-enseignant/add-enseignant.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';
import { EnfantsComponent } from './enfants/enfants.component';
import { AddEnfantComponent } from './add-enfant/add-enfant.component';
import { UpdateEnfantComponent } from './update-enfant/update-enfant.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DetailEnseignantComponent } from './detail-enseignant/detail-enseignant.component';
const routes: Routes = [
  {path: "stat", component : DashbordComponent},

  {path: "classes", component : ClassesComponent},
  {path: "add-classe", component : AddClasseComponent},
  {path: "updateClasse/:id", component: UpdateClasseComponent},
  {path: "enseignant", component : EnseignantComponent},
  {path: "detailEnseignant/:id", component : DetailEnseignantComponent},

  {path: "add-enseignant", component : AddEnseignantComponent},
  {path: "updateEnseignant/:id", component: UpdateEnseignantComponent},
  {path: "enfant", component : EnfantsComponent},
  {path: "detailEnfant/:id", component : DetailEnfantComponent},

  {path: "add-enfant", component : AddEnfantComponent},
  {path: "updateEnfant/:id", component: UpdateEnfantComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
