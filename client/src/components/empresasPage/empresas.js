import React from "react";
import EmpresasHeader from "./empresas_header";
import EmpresasMetodología from "./empresas_metodologia";
import EmpresasEspeciales from "./empresas_especiales";
import Sponsors from "../utils/sponsors";

export default function empresas() {
  return (
    <div>
      <EmpresasHeader />
      <EmpresasMetodología />
      <EmpresasEspeciales />
      <Sponsors />
    </div>
  );
}
