import CL_Empleados from "./CL_Empleados.js";
export default class CL_Empresa {
    constructor (){
        this.cont_H = 0;
        this.cont_M = 0;
    }

    procesarEmpleados(empleados){

        //CONTADOR DE HOMBRES Y MUJERES

        if( empleados.sexo == "F"){

            this.cont_M = this.cont_M + 1;
        }

        if(empleados.sexo == "M"){

            this.cont_H = this.cont_H + 1;
        }

    }

    calcularPorcM(){
        return (this.cont_M * 100) / (this.cont_M + this.cont_H).toFixed(2)+"%";
    }

    reporteCantidadH(){
        return this.cont_H;
    }
}