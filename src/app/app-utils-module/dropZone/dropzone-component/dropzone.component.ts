
import { Component , Output, EventEmitter, Input } from '@angular/core';
import { DropZoneDirective }from '../dropzone.directive';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-drop-zone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropZone.component.css']
})
export class DropZoneComponent {
  @Input() mensaje:string;
  @Output() rutaFoto = new EventEmitter<string>();

    // Main task 
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;
  constructor(private storage: AngularFireStorage, private toastrService : ToastrService) { }

  
  toggleHover(event: boolean) {
    this.isHovering = event;
  }


  startUpload(event: FileList) {
    // The File object
    const file = event.item(0)

    // Client-side validation example
    

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optional metadata
    const customMetadata = { app: 'VinylApp' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata })

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()

    // The file's download URL
    
    
    
    this.snapshot.pipe(finalize(() => {this.downloadURL = this.storage.ref(path).getDownloadURL()
                    
        this.downloadURL.subscribe(val => {console.log(val); 
            //Parece machete pero no lo es
            //Al iniciar en 1 y no en 0, se pasa del total de fotos
            //Se suma al terminar de subir, no mientras sube, por eso no debe sumar despues de acabar con todas las fotos
           
            //Manda el evento de que se subio una foto
            this.rutaFoto.emit(val);
            });
    })).subscribe();
    
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }
  
}