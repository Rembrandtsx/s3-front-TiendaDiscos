import { Component, Input, ViewChild, NgZone, OnInit } from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import {googleMapsClient} from '@google/maps';
import {google} from '@google/maps';
import { GeocodingApiService } from './geocodingapi.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
 
interface Location {
  lat: number;
  lng: number;
  viewport?: Object;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  marker?: Marker;
}

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  geocoder:any;
  styles:any=[
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#000000"
        },
        {
          "lightness": 13
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#144b53"
        },
        {
          "lightness": 14
        },
        {
          "weight": 1.4
        }
      ]
    },
    {
      "featureType": "landscape",
      "stylers": [
        {
          "color": "#0c353e"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0c4152"
        },
        {
          "lightness": 5
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ea064d"
        },
        {
          "lightness": 15
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#ea064d"
        },
        {
          "lightness": 25
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "color": "#146474"
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [
        {
          "color": "#021019"
        }
      ]
    }
  ];
  public location:Location = {
    lat: 51.678418,
    lng: 7.809007,
    marker: {
      lat: 51.678418,
      lng: 7.809007,
      draggable: true
    },
    zoom: 5
  };
 
@ViewChild(AgmMap) map: AgmMap;
@Input() direccionSalida: string;
@Input() direccionLlegada:string;

lat1:number;
lat2:number;
long1:number;
long2:number;
public lat: Number = 24.799448
public lng: Number = 120.979021

public origin: any
public destination: any




  constructor(public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper,  private serviceMap: GeocodingApiService) {
      var google: any;
this.mapsApiLoader = mapsApiLoader;
this.zone = zone;
this.wrapper = wrapper;
 }


  getDirectionOrigin() {
    this.serviceMap
      .findFromAddress(this.direccionSalida, "","", "Bogotá", "", "Colombia")
      .subscribe(response => {
          if (response.status == 'OK') {
              this.lat = response.results[0].geometry.location.lat;
              this.lng = response.results[0].geometry.location.lng;
              this.origin={lat: this.lat, lng: this.lng};
              console.log(this.origin);
          } else if (response.status == 'ZERO_RESULTS') {
              console.log('geocodingAPIService', 'ZERO_RESULTS', response.status);
          } else {
              console.log('geocodingAPIService', 'Other error', response.status);
          }
      });
    
  }
  getDirectionD() {
    this.serviceMap
      .findFromAddress(this.direccionLlegada, "","", "Bogotá", "", "Colombia")
      .subscribe(response => {
          if (response.status == 'OK') {
              this.lat = response.results[0].geometry.location.lat;
              this.lng = response.results[0].geometry.location.lng;
              this.destination={lat: this.lat, lng: this.lng};
              console.log(this.destination);
    
          } else if (response.status == 'ZERO_RESULTS') {
              console.log('geocodingAPIService', 'ZERO_RESULTS', response.status);
          } else {
              console.log('geocodingAPIService', 'Other error', response.status);
          }
      });
    
  }
  getDirection() {
    this.getDirectionOrigin();
    
    this.getDirectionD();
    
  }

  ngOnInit() {
   
    this.getDirection();
    
  }

}
