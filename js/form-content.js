class MyTextField extends HTMLElement {
    constructor() {
    super();
    // Attaches a shadow root to your custom element.
    let shadowRoot = this.attachShadow({ mode: 'open' });
    
    // Defines the "real" input element.
    let inputElement = document.createElement('input');
    inputElement.setAttribute('name', this.getAttribute('name'));
    
    inputElement.addEventListener('input', (e) => {
    inputElement.setAttribute('value', e.target.value);
    
    });
    
    // Appends the input into the shadow root.
    shadowRoot.appendChild(inputElement);
    }
   };
    
   customElements.define('real-digital-textfield', MyTextField);
    
   class MyButton extends HTMLElement {
    constructor() {
    super();
    let shadowRoot = this.attachShadow({ mode: 'open' });
    let buttonElement = document.createElement('button');
    let text = this.getAttribute('data-text');
    buttonElement.textContent = text;
    buttonElement.setAttribute("type","submit");
    //submit the data
    buttonElement.addEventListener("click", () => {
    let nameNode = document.getElementsByName("name")[0].shadowRoot.childNodes[0].attributes[1].nodeValue || "";
    let phoneNode = document.getElementsByName("phone")[0].shadowRoot.childNodes[0].attributes[1].nodeValue || "";
    let subjectNode = document.getElementsByName("subject")[0].shadowRoot.childNodes[0].attributes[1].nodeValue || "";
    let nameAttribute = document.getElementsByName("name")[0].getAttribute("name");
    let phoneAttribute = document.getElementsByName("phone")[0].getAttribute("name");
    let subjectAttribute = document.getElementsByName("subject")[0].getAttribute("name");
   
    document.getElementById("postObject").innerHTML ="Object to POST :<br>{<br/>" +nameAttribute+ ":"+ nameNode + ",<br>" +phoneAttribute+ ":"+ phoneNode + ",<br>"+subjectAttribute+ ":" + subjectNode + "<br>}"
    });
    shadowRoot.appendChild(buttonElement);
    }
   };
    
   customElements.define('real-digital-button', MyButton);
    
   class MyForm extends HTMLElement {
    constructor() {
    super();
    //let shadowRoot = this.attachShadow({mode: 'open'});
    let formElement = document.createElement('form');
    
    formElement.addEventListener('submit', (e) => {
    console.log('mySubmit was called');
    });
    }
    
    connectedCallback() {
    console.log('Custom form element added to page.');
    }
    
   };
    
   customElements.define('real-digital-form', MyForm);