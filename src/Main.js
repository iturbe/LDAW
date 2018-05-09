import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Ship from './Ship'
import Order from './Order'
import Profile from './Profile'
import Login from './Login'

// TODO: AQUÍ NO ES DONDE DEBERÍAN DE ESTAR TODOS LOS QUERIES DE INFO, NECESITAN ESTAR EN HOME Y DE AHÍ MANDAR COMO PROPS A LOS COMPONENTES CORRESPONDIENTES!!!

// OBTENER ITEMS
var items = [
  {
    id : 1, 
    userid : 1, // usuario al cual está ligado el producto
    trip : 1, // viaje al cual está ligado el producto
    name : "iPhone X",
    category : "Electronics",
    notes : "Help me send my iPhone!",
    image : "https://www.t-mobile.com/images/png/products/phones/Apple-iPhone-X-Silver/250x270_1.png",
    from : "CDMX",
    to : "GDL",
  },
  {
    id : 2, 
    userid : 1, // usuario al cual está ligado el producto
    trip : 1, // viaje al cual está ligado el producto
    name : "Cap",
    category : "Apparel",
    notes : "Please deliver to my cousin!",
    image : "https://store.moma.org/dw/image/v2/BBQC_PRD/on/demandware.static/-/Sites-master-moma/default/dw088e026b/images/125138_a.jpg?sw=1061&sh=1061&sm=cut",
    from : "GDL",
    to : "MTY",
  },
  {
    id : 3, 
    userid : 1, // usuario al cual está ligado el producto
    trip : 1, // viaje al cual está ligado el producto
    name : "Backpack",
    category : "Apparel",
    notes : "This definitely does not contain drugs!",
    image : "https://stockx.imgix.net/products/streetwear/Supreme-Backpack-SS18-Black.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format,compress&trim=color&q=40",
    from : "MTY",
    to : "CDMX",
  }
];

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    items = JSON.parse(this.responseText);
    console.log(items);
  }
});



xhr.open("GET", "http://ship-it.wake.mx/api/items");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.setRequestHeader("X-USER", "donald@trump.us");
xhr.setRequestHeader("Authorization", "Bearer WDLLQJFAisg1rjnPZn4zKZkcnoarc645W24ndSi3");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.setRequestHeader("Postman-Token", "c4853c13-a33c-4a8f-9be5-55b29d2d1cfd");

xhr.send(data);

// OBTENER USER DATA
// TODO: JONATHAN, TUS REPLIES DE USER NO ESTÁN INCLUYENDO EL USER ID! LO NECESITAMOS PARA FILTRAR LOS ELEMENTOS EN EL USER PROFILE
var userdata = {
  userid : 1,
  name : "John",
  lastname : "Doe",
  email : "john@doe.com"
};

var userdata2 = null;

var xhr2 = new XMLHttpRequest();
xhr2.withCredentials = true;

xhr2.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    userdata2 = JSON.parse(this.responseText);
  }
});

xhr2.open("GET", "http://ship-it.wake.mx/api/users/" + encodeURIComponent(userdata.email));
xhr2.setRequestHeader("Content-Type", "application/json");
xhr2.setRequestHeader("X-USER", userdata.email);
xhr2.setRequestHeader("Authorization", "Bearer WDLLQJFAisg1rjnPZn4zKZkcnoarc645W24ndSi3");
xhr2.setRequestHeader("Cache-Control", "no-cache");
xhr2.setRequestHeader("Postman-Token", "a7b7f63c-da8e-401b-8374-6cee19958607");

xhr2.send(data);

const cities = ["CDMX", "GDL", "MTY"];

const Main = () => (
  <main>
    <Switch>

      {/* name */}
      <Route exact path='/home' render={()=><Home cities={cities} userdata={userdata} items={items}/>}/>

      {/* N/A */}
      <Route exact path='/' component={Login}/>

      {/* to, from, todos los productos currently available */}
      {/* <Route exact path='/ship' component={Ship}/> */}
      <Route exact path='/ship' render={()=><Ship cities={cities} userdata={userdata} items={items}/>}/>

      {/* to, from */}
      {/* <Route exact path='/order' component={Order}/> */}
      <Route exact path='/order' render={()=><Order cities={cities} userdata={userdata}/>}/>

      {/* name, lastname, email */}
      <Route exact path='/profile' render={()=><Profile userdata={userdata} items={items}/>}/>
      
    </Switch>
  </main>
)

export default Main
