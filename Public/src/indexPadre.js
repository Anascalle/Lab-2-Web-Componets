import * as components from "./components/indexHijo.js";

class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // encapsulation, mode open means this is reachable for js on your web
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <hbo-nav img-src="data:image/png;base64,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" 
    buttonLog="Ingresa"
    buttonSubscribe="Subcríbite ahora" 
     ></hbo-nav>
 
    
    <subscription-plan
    choosetitle="Elige tu plan Estándar"
    includeparagraph="¿QUÉ ESTÁ INCLUIDO?"
    screens="Disfruta en todas tus pantallas."
    hightdefinition="Contenido en alta definición y 4K."
    available="Chromecast y Airplay disponibles."
    download="Descarga y disfruta donde sea"
    numberdevices="Ve en 3 dispositivos a la vez."
    familyaccounts="Hasta 5 perfiles para toda la familia."
></subscription-plan>

<price-cards
    timeplan3="3 meses"
    priceplan3="$52.900,00"
    discountplan3="Igual a $17.633,33 al mes"
    buttonchoose="ELIGE ESTE PLAN"
    timeplan12="12 meses"
    priceplan12="$169.900,00"
    discountplan12="Igual a $14.158,33 al mes *"
    buttonchoose="ELIGE ESTE PLAN"
    timeplan1="1 meses"
    priceplan1="$24.900,00"
    buttonchoose="ELIGE ESTE PLAN"

    
></price-cards>
<series-carrousel
paymentmessage = " Requiere pago anticipado. Ahorro basado en el precio del plan estándar  anual comparado con el precio del plan estándar mensual por 12 meses, excluyendo impuestos. Aplican términos."
  titlefreeseries="Episodios gratis, sin necesidad de suscripción"
  img-src-she-is-pretty="https://media.vogue.mx/photos/64d6b5b37e2c65e4c27e8821/2:3/w_2560%2Cc_limit/she-was-pretty.jpg"
  titlesheispretty="ELLA ERA BONITA"
  seefree="VER EPISODIOS GRATIS"
  img-src-gossip-girl="https://hips.hearstapps.com/hmg-prod/images/elle-leighton-meester-pelo-blair-waldorf-gossip-girl-1563871827.jpg"
  titlegossipgirl= "GOSSIP GIRL"
  img-src-my-adventure-superman="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/20eb4bb9-ccf3-4f3a-961f-b8701c238c93/dg1emw3-07f19eb3-7eba-411e-aab0-89ea120fac85.jpg/v1/fill/w_762,h_1049,q_70,strp/my_adventures_with_superman_by_nic011_dg1emw3-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIwZWI0YmI5LWNjZjMtNGYzYS05NjFmLWI4NzAxYzIzOGM5M1wvZGcxZW13My0wN2YxOWViMy03ZWJhLTQxMWUtYWFiMC04OWVhMTIwZmFjODUuanBnIiwiaGVpZ2h0IjoiPD0yMjAxIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uud2F0ZXJtYXJrIl0sIndtayI6eyJwYXRoIjoiXC93bVwvMjBlYjRiYjktY2NmMy00ZjNhLTk2MWYtYjg3MDFjMjM4YzkzXC9uaWMwMTEtNC5wbmciLCJvcGFjaXR5Ijo5NSwicHJvcG9ydGlvbnMiOjAuNDUsImdyYXZpdHkiOiJjZW50ZXIifX0.nheCPRE-W_94Ap6q88dayJO4z9LOl9c3J0dnbAlw6fI"
  titlemyadventurewithsuperman="MY ADVENTURE WITH SUPERMAN"
  img-src-and-just-like-that="https://media.glamour.com/photos/633dbad3b35c32508f9e7133/master/w_1600%2Cc_limit/1243744798"
  titleandjustlikethat="AND JUST LIKE THAT"
  img-arrow = "https://icones.pro/wp-content/uploads/2021/06/symbole-fleche-droite-grise.png"
  
  buttonSeeFree="VER EPISODIOS GRATIS" 

></series-carrousel>


`
;
  }
}

customElements.define("app-container", AppContainer);
