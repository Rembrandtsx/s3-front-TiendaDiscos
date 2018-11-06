export interface Usuario{
    email:string,
    username?:string,
    contrasenha:string,
    nombre?:string,
    direccion?:string
    rol?:string,
    calificacion?:number,
    type?:string,
    imagen?:string,
    id?:number,
    comentarios?:any[],
    transaccionesGeneradas?:any,
    transaccionesRecibidas?:any,
    vinilos?:any

}