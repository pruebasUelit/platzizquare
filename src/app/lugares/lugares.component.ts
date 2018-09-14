import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service.';

@Component({
    selector: 'app-lugares',
    templateUrl: './lugares.component.html'
})

export class LugaresComponent {
    title = 'platzizquare';

    lat: number = 19.4176668;
    lng: number = -99.1648051;
    lugares = null;
    constructor(private lugaresService: LugaresService) {
        lugaresService.getLugares()
            .valueChanges().subscribe(lugares=>{
                //debugger = para detener el servicio sin tener que poner un console log
                this.lugares = lugares
            })
    }

} 