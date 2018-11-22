import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VoitureType } from './voitureType';


@Injectable()
export class VoitureService {

    // voiture: VoitureType = { marque: "", modele: "", couleur: "", immatriculation: "" };
    // private voitureSource = new BehaviorSubject(this.voiture);
    // currentVoiture = this.voitureSource.asObservable();

    constructor() { }

    // changeVoiture(voiture: VoitureType) {
    //     this.voitureSource.next(voiture);
    // }

}