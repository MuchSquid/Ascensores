"use client";
import React from "react";

function DashboardLogged({ user }: { user: string }) {
  return (
    <main className="p-10">
      <div className="flex justify-center text-2xl  mb-10">
        Bienvenido al portal {user}
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div>
          <h1 className="text-xl font-bold mb-5">
            Estado actual del proyecto:
          </h1>
          <div className="mb-5">Progreso 20% completado</div>
        </div>
        {/*  Wdigets informativos */}
        <div>
          <h1 className="text-xl font-bold mb-5">Widgets</h1>
          <div className="grid grid-cols-2 gap-5">
            <div className="ring-2 p-5 rounded-sm min-h-[150px] ">
              <div>
                <p>Progreso 20% completado</p>
              </div>
            </div>

            <div className="ring-2 p-5 rounded-sm min-h-[150px]">
              <h2 className="mb-2">Proximos hitos:</h2>
              <ul className="list-disc ml-4">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
              </ul>
            </div>

            <div className="ring-2 p-5 rounded-sm min-h-[150px]">
              <h2>Notificaciones</h2>
            </div>

            <div className="ring-2 p-5 rounded-sm min-h-[150px]">
              <h2>Alertas</h2>
            </div>
          </div>
        </div>
        {/*  Accesos directos */}
        <div>
          <h1 className="text-xl font-bold mb-5">Accesos directos</h1>
          <button className="ring-1 p-2 rounded-xl">Ver Brief</button>
          <button className="ml-5 ring-1 p-2 rounded-xl">
            Revisar contrato
          </button>
          <button className="ml-5 ring-1 p-2 rounded-xl">
            Agendar reunión
          </button>
        </div>
        {/* Feed de actividad reciente */}
        <div>
          <h1 className="text-xl font-bold mb-5">Feed</h1>
          <div className="max-w-2xl mx-auto text-black">
            <div className="p-5 rounded-xl shadow-lg mb-5 bg-sky-200">
              <div className="flex items-center mb-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="profile"
                  src="https://images.unsplash.com/photo-1738696693336-7a24cea4e6f8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-bold">George Lobko</p>
                  <p className="text-sm">2 hours ago</p>
                </div>
                <button className="ml-auto">⋮</button>
              </div>
              <p className="mb-3">
                Hi everyone, today I was on the most beautiful mountain in the
                world 😍, I also want to say hi to Silena, Olya and Davis!
              </p>
              <div className="flex items-center text-gray-500 text-sm">
                <span>👁 6355</span>
                <span className="ml-3">❤️ Like</span>
                <span className="ml-3">💬 Comment</span>
              </div>
            </div>
          </div>
        </div>
        {/* Integraciònes con otras plataformas/herramientas */}
        <div>
          <h1 className="text-xl font-bold mb-5">
            Integracion con otras herramientas
          </h1>
          <h2>Google calendar</h2>
          <h2>Drive</h2>
          <h2>Azure</h2>
        </div>
      </div>
    </main>
  );
}

export default DashboardLogged;
