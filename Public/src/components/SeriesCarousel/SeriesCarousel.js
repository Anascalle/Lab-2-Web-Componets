class seriesCarousel extends HTMLElement {

    static get observedAttributes() {
        return ["titlefreeseries","img-src-she-is-pretty","titlesheispretty", "seefree","img-src-gossip-girl","titlegossipgirl","img-src-my-adventure-superman","titlemyadventurewithsuperman","img-src-and-just-like-that", "titleandjustlikethat", "buttonseefree", "paymentmessage", "img-arrow"];
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
        <link rel="stylesheet" href="src/components/SeriesCarousel/SeriesCarousel.css">
        <div class="paymentMessage">
        <p>
            ${this.paymentmessage} 
        </p>
    </div>
        <div class="seriesCarousel">
    <h1>${this.titlefreeseries}</h1>
    <div class="seriesCarouselImg"> 
        <div>  <img src="${this['img-src-she-is-pretty']}" alt="Img Serie Ella era bonita" height="300px"> <p class="nameOfSeries">${this.titlesheispretty}</p> <p class="paragraphWatchFree">${this.seefree}</p></div>
        <div> <img src="${this['img-src-gossip-girl']}" alt="Img Serie Gossip Girl" height="300px"> <p class="nameOfSeries">${this.titlegossipgirl}</p> <p class="paragraphWatchFree">${this.seefree}</p></div>
        <div> <img src="${this['img-src-my-adventure-superman']}" alt="-My Adventure with Superman" height="300px"> <p class="nameOfSeries">${this.titlemyadventurewithsuperman}</p> <p class="paragraphWatchFree">${this.seefree}</p></div>
        <div> <img src="${this['img-src-and-just-like-that']}" alt="Img Serie And Just Like That" height="300px"> <p class="nameOfSeries">${this.titleandjustlikethat}</p> <p class="paragraphWatchFree">${this.seefree}</p> </div>

 <img src="${this['img-arrow']}" height="80px" class="arrow"> </div>

          <button class="buttonSeeFree">${this.buttonseefree}</button>
</div>
        `;
    }
}

customElements.define('series-carrousel',seriesCarousel)
export default seriesCarousel;
