import React from "react";
import EspecialesHeader from "./especiales_header";
import EspecialesVentajas from "./especiales_ventajas";
import EspecialesCaracterísticas from "./especiales_caracteristicas";
import EspecialesDiferencias from "./especiales_diferencias";

export default function especiales() {
  return (
    <div>
      <EspecialesHeader />
      <EspecialesVentajas />
      <EspecialesCaracterísticas />
      <EspecialesDiferencias />
    </div>
  );
}
