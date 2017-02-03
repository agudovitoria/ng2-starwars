import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SwapiService } from './swapi.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from "@angular/router";

@NgModule({
  imports     : [HttpModule, RouterModule],
  declarations: [NotFoundComponent]
})
export class CoreModule {
  static forRoot (): ModuleWithProviders {
    return {
      ngModule : CoreModule,
      providers: [SwapiService]
    }
  }

  static forChild (): ModuleWithProviders {
    return {
      ngModule : CoreModule
    }
  }
}
