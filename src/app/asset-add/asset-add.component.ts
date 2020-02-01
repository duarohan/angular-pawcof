import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
@Component({
  selector: 'app-asset-add',
  templateUrl: './asset-add.component.html',
  styleUrls: ['./asset-add.component.css']
})
export class AssetAddComponent implements OnInit {
  @Input() list
  @Output() valueChange = new EventEmitter();
  public assetAddForm : FormGroup;
  constructor(
    private fb : FormBuilder
  ) { }

  ngOnInit() {
    this.assetAddForm = this.fb.group({
      version : new FormControl('', Validators.required),
      asset_type : new FormControl('', Validators.required),
      file :new FormControl('', Validators.required),
    })
  }
  
  onSubmit(value){
    let versionFound = this.list.some(el=>el.version === value.version)
    if(!versionFound){
      this.valueChange.emit(value);
      this.assetAddForm.reset();
    }
    
  }
}