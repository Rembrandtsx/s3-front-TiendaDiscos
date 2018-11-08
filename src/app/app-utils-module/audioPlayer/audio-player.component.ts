import { Component, OnInit } from "@angular/core";
import {VgAPI} from 'videogular2/core';
import { OverlayMusic } from "../../canciones/overlay";

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: [ './audio-player.component.css' ]
})
export class AudioPlayerComponent implements OnInit {
    sources: string;

    constructor(private overlay:OverlayMusic) {
        this.sources = overlay.cancnionActual;
    }

    ngOnInit() {
    }




}
