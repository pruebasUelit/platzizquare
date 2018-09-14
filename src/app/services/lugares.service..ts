import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Http } from '@angular/http';

@Injectable()


export class LugaresService{
    lugares: any = [
        { id: 1, plan: 'gratuito', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la Gardenia', description: 'Esta es la descripción del lugar.' },
        { id: 2, plan: 'gratuito', cercania: 3, distancia: 2, active: true, nombre: 'Donas la pandita', description: 'Esta es la descripción del lugar.' },
        { id: 3, plan: 'pagado', cercania: 2, distancia: 10, active: true, nombre: 'Veterinaria Petco', description: 'Esta es la descripción del lugar.' },
        { id: 4, plan: 'pagado', cercania: 3, distancia: 8, active: true, nombre: 'Antea', description: 'Esta es la descripción del lugar.' }
    ];

    constructor(private afDB:AngularFireDatabase, private http: Http){
    }

    public getLugares(){
        return this.afDB.list('lugares/');
    }
    public buscarLugar(id){
        //filter es una especie de for each. Siempre nos va a regresar un arreglo
        // return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
        return this.afDB.object('lugares/' + id);
    }
    public guardarLugar(lugar){
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar)
    }
    public editarLugar(lugar){
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar)
    }
    public obtenerGeoData(direccion){
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
    }
    public getLugar(id){
        return this.afDB.object('lugares/' + id);
    }
}