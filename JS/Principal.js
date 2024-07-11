import CL_Empleados from "./CL_Empleados.js";
import CL_Empresa from "./CL_Empresa.js";

let emple1 = new CL_Empleados("Mary", "F");
let emple2 = new CL_Empleados("Jose", "M");
let emple3 = new CL_Empleados("Carlos", "M");
let emple4 = new CL_Empleados("Pedro", "M");

let empresa = new CL_Empresa();
empresa.procesarEmpleados(emple1);
empresa.procesarEmpleados(emple2);
empresa.procesarEmpleados(emple3);
empresa.procesarEmpleados(emple4);

let salida = document.getElementById("salida");

salida.innerHTML += "<br> La cantidad de hombres que trabajan en la empresa: " +empresa.reporteCantidadH();
salida.innerHTML += "<br> El porcentaje de las mujeres: " +empresa.calcularPorcM();
