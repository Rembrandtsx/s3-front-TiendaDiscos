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
  ]
 
@ViewChild(AgmMap) map: AgmMap;
@Input() direccionLlegada:string;


public lng: number = -74.0817500
public lat: number = 4.6097100


  constructor(public mapsApiLoader: MapsAPILoader,
    private zone: NgZone,
    private wrapper: GoogleMapsAPIWrapper,  private serviceMap: GeocodingApiService) {
      var google: any;
this.mapsApiLoader = mapsApiLoader;
this.zone = zone;
this.wrapper = wrapper;
 }


  getDirection() {
    this.serviceMap
      .findFromAddress(this.direccionLlegada, "","", "Bogotá", "", "Colombia")
      .subscribe(response => {
          if (response.status == 'OK') {
              this.lat = response.results[0].geometry.location.lat;
              this.lng = response.results[0].geometry.location.lng;
              
          } else if (response.status == 'ZERO_RESULTS') {
              console.log('geocodingAPIService', 'ZERO_RESULTS', response.status);
          } else {
              console.log('geocodingAPIService', 'Other error', response.status);
          }
      });
    
  }
  

  ngOnInit() {
   
    this.getDirection();
    
  }

}
