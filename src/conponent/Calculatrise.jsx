import { Component } from "react";

class Calculatrice extends Component {
  constructor() {
    super();
    this.state = {
      nombre1: '',
      nombre2: '',
      resultat: null,
      operation: '+',
    };
  }

  changer = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  selectionner = (event) => {
    const { value } = event.target;
    this.setState({ operation: value });
  };

  calculer = () => {
    const { nombre1, nombre2, operation } = this.state;
    const num1 = parseFloat(nombre1);
    const num2 = parseFloat(nombre2);
    let resultat;
    switch (operation) {
      case '+':
        resultat = num1 + num2;
        break;
      case '-':
        resultat = num1 - num2;
        break;
      case '*':
        resultat = num1 * num2;
        break;
      case '/':
        resultat = num2 !== 0 ? num1 / num2 : 'Erreur: division par zéro';
        break;
      default:
        resultat = 'Opération inconnue';
    }
    this.setState({ resultat });
  };

  render() {
    const { nombre1, nombre2, operation, resultat } = this.state;
    return (
      <div>
        <input
          type="text"
          name="nombre1"
          placeholder="Nombre 1"
          onChange={this.changer}
          value={nombre1}
        />
        <br /><br />
        <select name="operation" value={operation} onChange={this.selectionner}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <br /><br />
        <input
          type="text"
          name="nombre2"
          placeholder="Nombre 2"
          onChange={this.changer}
          value={nombre2}
        />
        <br /><br />
        <button onClick={this.calculer}>Calculer</button>
        <br /><br />
        <strong>Le résultat est: {resultat}</strong>
      </div>
    );
  }
}

export default Calculatrice;
