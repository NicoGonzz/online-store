import { Component } from '@angular/core';
import { Product } from './product.model'; // Exporto al interfaz

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //Se conecta mi componente con el html
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //El componente debe ser publico para que las otras clases accedan a el
  title = 'online-store';
  img = 'https://i1.wp.com/blog.enriqueoriol.com/wp-content/uploads/2018/01/AngularLogo.jpg?fit=1200%2C675';
  name = "Nicolas";
  age = 21;
  btnDisabled = true;
  person = { //Renderizamos un objeto
    name: "Juan",
    age: 20,
    avatar: "https://previews.123rf.com/images/jemastock/jemastock1701/jemastock170100846/68927192-retrato-del-hombre-barbudos-ojos-verdes-ilustraci%C3%B3n-vectorial-de-color-marr%C3%B3n-pelo-eps-10.jpg"
  }
  names: string []= ['Juan','Nicolas','Nicol','Natalia'] ;
  newName = '';
  products : Product[] = [  //Creamos la interfaz y que sea igual a esa
      {
        name: 'Harry Potter',
        price: 500,
        image: './assets/images/potter.jpg',
        category: 'Funko'
      },
      {
        name: 'Hermione Granger',
        price: 450,
        image: './assets/images/hermione.jpg'
      },
      {
        name: 'Ronald Weasley',
        price: 400,
        image: './assets/images/weasley.jpg'
      },
      {
        name: 'Draco Malfoy',
        price: 350,
        image: './assets/images/draco.jpg'
      },
      {
        name: 'Luna Lovegood',
        price: 250,
        image: './assets/images/luna.jpg'
      },
      {
        name: 'Lord Voldemort',
        price: 500,
        image: './assets/images/voldemort.jpg'
      },
      {
        name: 'Lord Voldemort',
        price: 500,
        image: './assets/images/voldemort.jpg'
      },
      {
        name: 'Lord Voldemort',
        price: 500,
        image: './assets/images/voldemort.jpg'
      },
      {
        name: 'Lord Voldemort',
        price: 500,
        image: './assets/images/voldemort.jpg'
      },
      {
        name: 'Lord Voldemort',
        price: 500,
        image: './assets/images/voldemort.jpg'
      }


  ]
    toggleButton(){
      this.btnDisabled = !this.btnDisabled; //Cambiamos el estado
    }
    sumaEdadButton(){   //Eventos tipo click
        this.person.age +=1;
    }
    restaEdadButton(){    //Eventos tipo click
      this.person.age -=1;
    }
    onScroll(event: Event){ //Depende al elemento que estemos trabajando
        const element = event.target as HTMLElement; //Que el elemento se comportara como html
        console.log(element.scrollTop);
    }
    changeName(event: Event){
      const element = event.target as HTMLInputElement; //Que el elemento se comportara como html y que es un input
      this.person.name = element.value; //Que valor tiene el input y que se cambie por el nombre
    }
    addName(){
      this.names.push(this.newName); // Ingresamos un nuevo elemento al final de la lista del array names
      this.newName = ''; //Al agregar el elemento se actualiza en el input y se limpia
    }
    deleteName(index: number){ //Recibo la posicion
      this.names.splice(index,1);
    }
}
