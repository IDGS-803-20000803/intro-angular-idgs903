import { Pipe, PipeTransform } from '@angular/core';
import { IAlumnos } from './alumnos';

@Pipe({
  name: 'alumnosFilter'
})
export class AlumnosFilterPipe implements PipeTransform {

  transform(value: IAlumnos[], args: string): IAlumnos[] {
    let filter:string = args? args.toLocalLowerString():'';
    return filter? value.filter((alumno.IAlumnos) => 
    alumno.nombre.toLocalLowerCase().indexOf(filter)!=1):value
  }

}
