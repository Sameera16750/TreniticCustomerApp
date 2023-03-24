import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceReplacePipe } from './space-replace.pipe';



@NgModule({
    declarations: [
        SpaceReplacePipe
    ],
    exports: [
        SpaceReplacePipe
    ],
    imports: [
        CommonModule
    ]
})
export class PipesModule { }
