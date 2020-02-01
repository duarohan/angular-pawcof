import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AssetViewComponent } from './asset-view/asset-view.component';
import { AssetAddComponent } from './asset-add/asset-add.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, AssetViewComponent, AssetAddComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
