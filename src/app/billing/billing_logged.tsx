import React from "react";

function Billing_logged() {
  return (
    <main className="p-20 w-full">
      <h1 className="text-xl font-bold">Billing + Contrato</h1>
      <div className="grid lg:grid-cols-2 my-5">
        <div className="lg:min-w-[50%]">
          <h2 className="mb-2">Facturacion</h2>
          <div>Resumen de facturas</div>
          <div>Detalles de Transacciones</div>
          <div>Acceso a Pagos Online</div>
          <div>Historial Financiero y Reportes</div>
        </div>
        <div>
          <h2 className="mb-2">Contrato</h2>
          <div>Documento del contrato</div>
          <div>Resumen de Términos Clave</div>
          <div>Cronograma de pagos y condiciones financieras</div>
          <div>Preguntas frecuentes</div>
          <div>E-Signature</div>
        </div>
      </div>
    </main>
  );
}

export default Billing_logged;
