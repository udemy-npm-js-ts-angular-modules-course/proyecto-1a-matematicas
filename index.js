module.exports = {
    /**
     * Suma de dos números
     * @example
     * n1 = 1, n2 = 3 => 4
     * @param {*} n1 Número uno de la suma
     * @param {*} n2 Número dos de la suma
     * @returns n1 + n2
     */
    suma: function(n1, n2) {
        return this.esNumero(n1,n2) ? (n1 + n2) : this.mensajeError();
    },
        /**
     * Resta de dos números
     * @example
     * n1 = 1, n2 = 3 => -2
     * @param {*} n1 Número uno de la resta
     * @param {*} n2 Número dos de la resta
     * @returns n1 - n2
     */
    resta: function(n1, n2) {
        return this.esNumero(n1,n2) ? (n1 - n2) : this.mensajeError();
    },
        /**
     * Multiplicación de dos números
     * @example
     * n1 = 1, n2 = 3 => 3
     * @param {*} n1 Número uno de la multiplicación
     * @param {*} n2 Número dos de la multiplicación
     * @returns n1 * n2
     */
    multiplicacion: function(n1, n2) {
        return this.esNumero(n1,n2) ? (n1 * n2) : this.mensajeError();
    },
        /**
     * División de dos números
     * @example
     * n1 = 1, n2 = 3 => 0.333
     * @param {*} n1 Número uno de la división
     * @param {*} n2 Número dos de la división
     * @returns n1 / n2
     */
    division: function(n1, n2) {
        return this.esNumero(n1,n2) ? (n1 / n2) : this.mensajeError();
    },
    /**
     * Mensaje de error que se ejcuta cuando no tengamos valores numéricos.
     */
    mensajeError: function() {
        console.log("Un valor o los dos valores no son numéricos");
    },
    /**
     * Comprueba que son valores numéricos
     * @param {*} n1 
     * @param {*} n2 
     * @returns boolean
     */
    esNumero: function(n1, n2) {
        return typeof n1 === 'number' && typeof n2 === 'number';
    }
}