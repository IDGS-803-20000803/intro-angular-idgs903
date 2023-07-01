import { RouterModule,Routes } from "@angular/router";
import { NgModel } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CrudComponent } from "./ejercicios/crud/crud.component";

const routes:Routes=[
    {path: '', redirectTo: '/home', pathMatch:'full'},
    {path: 'IEVN', component:CrudComponent}
    //{path:'**', component: PageFoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}