class priceCards extends HTMLElement {

    static get observedAttributes() {
        return ["timeplan3","priceplan3","discountplan3", "buttonchoose","timeplan12","priceplan12","discountplan12","timeplan1","priceplan1"];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" }); 
    }

    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./src/components/PriceCards/PriceCards.css">
        <div class="plansContainer"> 

        <div class="plan3months">
            <div class="planDetails">
        <h3>${this.timeplan3}</h3>
        <h1>${this.priceplan3}</h1>
        <p>${this.discountplan3}</p>
            </div>
        <button class="choosePlanButton">${this.buttonchoose}</button>
        </div>
    
    
        <div class="plan12months">
            <button class="saving3MonthsButton">AHORRA 3 MESES</button>
            <div class="planDetails">
            <h3>${this.timeplan12}</h3>
            <h1>${this.priceplan12}</h1>
            <p>${this.discountplan12}</p>
                </div>
                <button class="choosePlanButton">${this.buttonchoose}</button>
        </div>
    
        <div class="plan1months">
            <div class="planDetails">
            <h3>${this.timeplan1}</h3>
            <h1>${this.priceplan1}</h1>
                </div>
                <button class="choosePlanButton">${this.buttonchoose}</button>
  
        </div>
        
 
    
    </div>
        `;
    }
}

customElements.define('price-cards', priceCards)
export default priceCards;