import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      backgroundImage: { type: String },
      textSize: { type: String},
      textColor: { type: String},
      h3: { type: String },
      backgroundColor: { type: String },
    
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        margin: 16px;
        
      }

      .bg {
        height: 360px;
        line-height: 18.4;
        width: 419.8px;
        display: inline-block;
        background-color: '';
        background-image: '';
        background-size: cover;
        
        
        
        
      }

      

      .content {
        align-items: center;
        display: grid;
        height: 360px;
        font-size: 16px;
        line-height: 18.4px;
       
      }

      .b {
        background-color: rgb(30, 64, 124);
        color: rgb(0, 30, 68);
        display: block;
        font-family: Roboto, "Franklin Gothic Medium", Tahoma, sans-serif;
        font-weight: 700;
        height: 3px;


      }
      

      .wrapper{
        display: flex;
        
      }
      
      .h3 {
        color: var(--text-color, white);
        display: block;
        font-family: Roboto, "Franklin Gothic Medium", Tahoma, sans-serif;
        font-size: var(--text-size, 32px);
        font-weight: 700;
        margin-block-end: 16px;
        margin-block-start: 0px;
        padding-left: 60px;
        padding-right: 60px;
        line-height: 46px;
        width: 299.797px;
        white-space: normal;
        overflow: hidden;
      }
      

    `;
  }
  
  constructor() {
    super();
    this.backgroundImage= '';
    this.textSize= '32px';
    this.textColor = 'white';
    this.h3 = '';
    this.backgroundColor='#1e407c';
  }

  render() {
    return html`
      
      <div class="bg" style="background-color: ${this.backgroundColor}; background-image: ${this.backgroundImage};">
        <div class="content">
          <div class="h3">
            <h3>${this.h3}</h3>
          </div>
        </div>
      </div>
           

              
      `;
  }
}
customElements.define('polaris-chip', PolarisChip);