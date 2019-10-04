import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  //   { path: "home", loadChildren: "./home/home.module#HomeModule" },
  {
    path: "details",
    loadChildren:
      "./pages/todo-details/todo-details.module#TodoDetailsPageModule"
  },
  {
    path: "details/:id",
    loadChildren:
      "./pages/todo-details/todo-details.module#TodoDetailsPageModule"
  },
  {
    path: "display",
    loadChildren: "./pages/display/display.module#DisplayPageModule"
  },
  { path: "index", loadChildren: "./pages/index/index.module#IndexPageModule" },
  { path: 'employee', loadChildren: './pages/employee/employee.module#EmployeePageModule' },
  { path: 'employee-details', loadChildren: './pages/employee-details/employee-details.module#EmployeeDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
