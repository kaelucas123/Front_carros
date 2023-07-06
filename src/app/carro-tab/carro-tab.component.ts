import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

var estado = false;
const carrosSelectionados: number[] = [];

@Component({
  selector: 'app-carro-tab',
  templateUrl: './carro-tab.component.html',
  styleUrls: ['./carro-tab.component.css']
})

export class CarroTabComponent {
  carros: any[] = [];
  constructor(private http: HttpClient) { }

  reloadPage(){
    this.http.get('http://localhost:8080/carros').subscribe((data: any) => {
      this.carros = data as any[];
    });
  }

  // Executa a ação ao carregar a página.
  ngOnInit() { 
    this.reloadPage();
  }

  ngDoCheck(){

  }
  // Testar função.
  teste(){
    console.log("Funcionando")
  }
  
  //deletar carros selecionados
  deletar() {
    const elements = document.getElementsByClassName("selectDelete");

    carrosSelectionados.forEach((id) => {
      this.http.delete(`http://localhost:8080/carros/${id}`).subscribe(
        () => {
          console.log(`Carro com ID ${id} removido com sucesso.`);
          const indice = carrosSelectionados.indexOf(id);
          carrosSelectionados.splice(indice)
          this.reloadPage()
        },
        (error) => {
          console.error(`Erro ao remover o carro com ID ${id}:`, error);
        }
      );
    });
  }

  atualizarCarro(carro: any) {
    this.http.put(`http://localhost:8080/carros/${carro.id}`, carro).subscribe(
      () => {
        console.log(`Carro com ID ${carro.id} atualizado com sucesso.`);
      },
      (error) => {
        console.error(`Erro ao atualizar o carro com ID ${carro.id}:`, error);
      }
    );
  }
  
  selecionarCarro(id: number) {
    if(!carrosSelectionados.includes(id)){
      carrosSelectionados.push(id)
      console.log("carro " + id + " adicionado.")
    }
    else{
      const indice = carrosSelectionados.indexOf(id);
      carrosSelectionados.splice(indice)
      console.log('Carro ' + id + " removido.");
    }
    
  }

  hasCarrosSelecionados(): boolean {
    return carrosSelectionados.length > 0;
  }
}
