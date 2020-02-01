import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  public bundleList = [{
      version:'1',
      asset_type:'Image',
      file: 'image.png'
    },{
      version:'1',
      asset_type:'Audio',
      file: 'audio.ogg'
    },{
      version:'1',
      asset_type:'Video',
      file: 'video.mkv'
    }]
  newBundle(value){
    // console.log(value)
    this.bundleList.push(value)
  }
  
  newList(value){
    // console.log(value);
    this.bundleList = value;
  }
}
