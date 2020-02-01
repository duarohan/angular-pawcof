import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {
  @Input() list  
  @Output() updateList = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    console.log('asset view changed')
  }
  
  delete(version){
    this.list = this.list.filter(el=>el.version !== version)
    this.updateList.emit(this.list);
  }
}