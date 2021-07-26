import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';




@Component({
  selector: 'app-paginaia',
  templateUrl: './paginaia.page.html',
  styleUrls: ['./paginaia.page.scss'],
})
export class PaginaiaPage implements OnInit {

  form: FormGroup;
  constructor(private alertCtrl: AlertController) { }

    ngOnInit() {

      this.form = new FormGroup({

        altura: new FormControl(null,{
          updateOn: 'blur',
          validators: [Validators.required,Validators.min(1)]
        }),
        peso: new FormControl(null,{
          updateOn: 'blur',
          validators: [Validators.required,Validators.min(1)]
        }),
        forca: new FormControl(null,{
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }),
        velocidade: new FormControl(null,{
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(3.5)]
        }),
      });
  }
   onCreatePosicao(){

      if (this.form.value.altura >= 176 && this.form.value.peso <= 90  && this.form.value.velocidade <= 5)
      {
        this.alertCtrl.create({
          header: 'Posição',
          message: 'Posição recomendada: WR',
          buttons: ['OK']
        }).then(alertEl=>alertEl.present());
      };

      if (this.form.value.altura >= 176  && this.form.value.forca > 30 && this.form.value.velocidade <= 5)
      {
        this.alertCtrl.create({
          header: 'Posição',
          message: 'Posição recomendada: CB/S',
          buttons: ['OK']
        }).then(alertEl=>alertEl.present());
      };

      if (this.form.value.altura < 175 && this.form.value.peso >= 70 && this.form.value.forca > 20 && this.form.value.velocidade <= 4.7)
      {
        this.alertCtrl.create({
          header: 'Posição',
          message: 'Posição recomendada: RB',
          buttons: ['OK']
        })
        .then(alertEl=>alertEl.present());
    };
      if (this.form.value.altura > 175 && this.form.value.peso > 80 && this.form.value.forca > 30 && this.form.value.velocidade <= 6)
      {
        this.alertCtrl.create({
          header: 'Posição',
          message: 'Posição recomendada: LB',
          buttons: ['OK']
        }).then(alertEl=>alertEl.present());
      };

      if (this.form.value.altura > 180 && this.form.value.peso > 80 && this.form.value.forca > 30 && this.form.value.velocidade <= 6)
      {
        this.alertCtrl.create({
          header: 'Posição',
          message: 'Posição recomendada: TE',
          buttons: ['OK']
        }).then(alertEl=>alertEl.present());
      };

      if (this.form.value.altura > 180  && this.form.value.peso > 100 && this.form.value.velocidade >=6)
      {
        this.alertCtrl.create ({
          header: 'Posição',
          message: 'Posição recomendada: OL/DL',
          buttons: ['OK']
        }).then(alertEl=>alertEl.present());
      };

    }
    private alerta(message: string)
    {
       this.alertCtrl.create({
      header: 'Posição',
      message: message,
      buttons: ['OK']
    })
    .then(alertEl=>alertEl.present());
    }
  }
