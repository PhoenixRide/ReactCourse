class Alumno{
	constructor (nombre, apellido, curso){
	this._nombre = nombre
	this._apellido= apellido	
	this._curso = curso	
	}
get NombreAl(){
	return this._nombre
}	
get ApellidoAl(){
	return this._apellido
}
set CursoAl (curso){
	return this._curso
	}
get NombreCompleto(){
	return `${this._nombre} ${this._apellido} ${this._curso}`
}
}
export default Alumno
