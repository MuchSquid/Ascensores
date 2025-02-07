import React from "react";

function Brief_logged() {
  return (
    <main className="p-20 w-full">
      <div className="flex flex-col gap-5 min-h-[300px]">
        <h1 className="text-xl font-bold">Descripción del proyecto</h1>
      </div>
      <div className="flex flex-col gap-5 min-h-[300px]">
        <h1 className="text-xl font-bold">Alcance y Requisitos</h1>
      </div>
      <div className="flex flex-col gap-5 min-h-[300px]">
        <h1 className="text-xl font-bold">Cronograma y Hitos</h1>
      </div>
      <div className="flex flex-row justify-start min-h-[300px]">
        <div className="flex flex-col gap-5 min-w-[50%]">
          <h1 className="text-xl font-bold">Documentación Adjunta</h1>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-xl font-bold">Comentarios</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 min-h-[300px]">
        <h1 className="text-xl font-bold">Historial de versiones</h1>
      </div>
    </main>
  );
}

export default Brief_logged;
