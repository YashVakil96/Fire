import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "display", pathMatch: "full" },
  { path: "home", loadChildren: "./pages/home/home.module#HomeModule" },
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
