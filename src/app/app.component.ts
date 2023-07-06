import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarroTabComponent } from './carro-tab/carro-tab.component';


var estado = false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  carros: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/carros').subscribe((data: any) => {
      this.carros = data as any[];
    });
  }

  deletar() {
    estado = !estado;

    const elements = document.getElementsByClassName("selectDelete");

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      if (estado) {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    }

  }

  title = 'carros';
}
