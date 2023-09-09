class nav extends HTMLElement {

    static get observedAttributes() {
        return ["img-src","buttonlog","buttonsubscribe"];
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
        <link rel="stylesheet" href="src/components/nav/nav.css">
        <nav>
    <img src="${this['img-src']}" alt="Logo HBO-MAX" width="160px" class="Logo">
    <button class="LogInButton">${this.buttonlog}</button>
    <button class="SubscribeButton">${this.buttonsubscribe}</button>
</nav>
        `;
    }
}

customElements.define('hbo-nav', nav)
export default nav;