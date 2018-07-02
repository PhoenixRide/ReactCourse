class Becario{
	constructor(nombre, apellido, categoria, beca){
		this._nombre = nombre
		this._apellido = apellido
		this._categoria = categoria
		this._beca = beca
	}
	get NombreBe (){
		return this._nombre
	}
	get ApellidoBe(){
		return this._apellido
	}
	get CategoriaBe(){
		return this._categoria
	}
	get BecaBe(){
		return this._beca
	}
	get BecarioCompleto(){
	return `${this._nombre} ${this._apellido} ${this._categoria} ${this._categoria} ${this._beca}`
}
}
export default Becario