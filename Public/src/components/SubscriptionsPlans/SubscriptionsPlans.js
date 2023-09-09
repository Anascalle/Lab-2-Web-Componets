class SubscriptionPlan extends HTMLElement {
    
    static get observedAttributes() {
        return ["choosetitle", "includeparagraph","screens", "hightdefinition", "available", "download", "numberdevices", "familyaccounts"];
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

    render() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="src/components/SubscriptionsPlans/SubscriptionPlans.css">
            
            <section class="containerSubscriptionsPlan">
            <h2>${this.choosetitle}</h2>
            <p>${this.includeparagraph}</p>
            <header class="includedList">
                <ul class="grid-container">
                    <li>${this.screens}</li>
                    <li>${this.hightdefinition}</li>
                    <li>${this.available}</li>
                    <li>${this.download}</li>
                    <li>${this.numberdevices}</li>
                    <li>${this.familyaccounts}</li>
                </ul>
            </header>
        </section>
       
        `;
    }
}

customElements.define('subscription-plan', SubscriptionPlan);
export default SubscriptionPlan;
