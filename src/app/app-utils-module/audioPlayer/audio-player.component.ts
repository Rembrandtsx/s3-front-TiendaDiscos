import { Component, OnInit } from "@angular/core";
import {VgAPI} from 'videogular2/core';
import { Overlay } from "../../canciones/overlay";

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: [ './audio-player.component.css' ]
})
export class AudioPlayerComponent implements OnInit {
    sources: string;

    constructor(public overlay:Overlay) {
        this.sources = overlay.cancnionActual;
    }

    ngOnInit() {
    }


    changeSource(){
        
    }

}
