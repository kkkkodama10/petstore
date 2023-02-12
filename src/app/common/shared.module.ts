import { NgModule } from "@angular/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';


const material = [
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
]

@NgModule({
    imports: [material],
    exports: [material]
})

export class SharedModule{

}
