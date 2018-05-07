import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Ship from './Ship'
import Order from './Order'
import Profile from './Profile'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"

// TODO: AQUÍ HAY QUE OBTENER TODA LA INFO RELATIVA AL USUARIO Y MANDAR LOS PROPS A LAS PÁGINAS CORRESPONDIENTES

const userdata = {
  userid : 1,
  name : "John",
  lastname : "Doe",
  email : "john@doe.com"
};

const items = [
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

const cities = ["CDMX", "GDL", "MTY"];

const Main = () => (
  <main>
    <Switch>
      
      {/* name */}
      <Route exact path='/' component={Home}/>

      {/* to, from, todos los productos currently available */}
      {/* <Route exact path='/ship' component={Ship}/> */}
      <Route exact path='/ship' render={()=><Ship cities={cities} userdata={userdata} items={items}/>}/>

      {/* to, from */}
      {/* <Route exact path='/order' component={Order}/> */}
      <Route exact path='/order' render={()=><Order cities={cities} userdata={userdata}/>}/>

      {/* name, lastname, email */}
      <Route exact path='/profile' render={()=><Profile userdata={userdata}/>}/>
      
    </Switch>
  </main>
)

export default Main
