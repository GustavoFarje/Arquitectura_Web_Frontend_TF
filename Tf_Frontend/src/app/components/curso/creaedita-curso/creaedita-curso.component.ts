import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';
@Component({
  selector: 'app-creaedita-curso',
  templateUrl: './creaedita-curso.component.html',
  styleUrls: ['./creaedita-curso.component.css']
})
export class CreaeditaCursoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  curso: Curso = new Curso();
  mensaje: string = '';
  id:number = 0;
  codCurso:number = 0;
  edicion: boolean = true;  
  constructor(
    private cS: CursoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ){}


  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  
    this.form = this.formBuilder.group({
      id: [''],
      codCurso: [''],
      nombreCurso: ['', Validators.required]
    });
  }
  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          codCurso: new FormControl(data.codCurso),
          nombreCurso: new FormControl(data.nombreCurso)
          
        });
      });
    }
  }
  obtenerControlCampo(nombreCampo: string): AbstractControl {
    const control = this.form.get(nombreCampo);
    if (!control) {
      throw new Error(`Control no encontrado para el campo ${nombreCampo}`);
    }
    return control;
  }
  aceptar(): void {
    if (this.form.valid) {
      this.curso.id = this.form.value.id;
      this.curso.codCurso = this.form.value.codCurso;
      this.curso.nombreCurso = this.form.value.nombreCurso;
      if (this.edicion) {
        this.cS.update(this.curso).subscribe(() => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        this.cS.insert(this.curso).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }
      this.router.navigate(['curso']);
    } else {
      this.mensaje = 'Por favor complete todos los campos obligatorios.';
    }
  }

}
