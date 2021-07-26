import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'posicao.page.html',
  styleUrls: ['posicao.page.scss'],
})
export class PosicaoPage {

  information: any[];
  automaticClose = false;

  constructor(private http: HttpClient) {
    this.http.get('assets/information.json').subscribe(res => {
      console.log(res);
      this.information = res['items'];
      this.information[0].open = true;
    });
  }

  toggleSection(index) {
    this.information[index].open = !this.information[index].open;

    if (this.automaticClose && this.information[index].open) {
      this.information
      .filter((item, itemIndex) => itemIndex !== index)
      .map(item => item.open = false);
    }
  }

  toggleItem(index, childIndex) {
    this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
  }

}
