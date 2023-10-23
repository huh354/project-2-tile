import { LitElement, html, css } from 'lit';

export class PolarisChip extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      link: { type: String },
      active: { type: Boolean, reflect: true }
    };
  }

  static get styles() {
    return css`
      :host {
        column-gap: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        line-height: 18.4px;
        margin-top: 32px;
        row-gap: 20px;
        width: 1090px;
        margin-left: 52px;
        margin-right: 52px;
        margin-bottom:0px;
      }
      
      //.tile:focus,
      //.tile:hover,
      //:host([active]) .tile {
      //  background-color: #e4e5e7;
      //  border: 2px solid #e4e5e7;
      //  border-radius: 2px;
      //  color: #005fa9;
      //  cursor: pointer;
      //  text-decoration: underline;

      //}


      .wrapper{
        display: grid;
      }

      .tile {
        font-weight: bold;
        text-decoration: none;
        height: 298.5px;
        line-height: 18.4;
        width: 298.5px;
        padding: 8px 4px;
        color: rgb(255, 255, 255);
        background-color: rgb(30, 64, 124);
        font-size: 16px;
      }
    `;
  }

  constructor() {
    super();
    this.name = '';
    this.tile = "https://www.psu.edu/news/research/";

  }

  render() {
    return html`<a class="tile" href="${this.tile}"><slot>${this.name}</slot></a>`;
  }
}
