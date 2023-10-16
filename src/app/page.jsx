"use client";
import { useState } from "react";
import ExpanseItem from "./components/expanseItem";
import CurrencyFormatter from "./lib/utils";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import Modal from "./components/modal";

ChartJS.register(ArcElement, Tooltip, Legend);

const DUMMY_DATA = [
  {
    id: 1,
    tittle: "Gasolina",
    color: "red",
    total: 200,
  },
  {
    id: 2,
    tittle: "Aluguel",
    color: "blue",
    total: 2200,
  },
  {
    id: 3,
    tittle: "Supermercado",
    color: "green",
    total: 1200,
  },
];

export default function Home() {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  return (
    <>

      <Modal show={modalIsOpen} onClose={setModalIsOpen}></Modal>

      <main className="container max-w-2xl mx-auto px-6">
        {/* Main menu */} 
        <section className="py-3">
          <small className="text-gray-400 text-md"> Meu saldo </small>
          <h2 className="text-4xl font-bold">{CurrencyFormatter(200.11)} </h2>
        </section>

        <section className="flex items-center justify-center gap-4 py-3">
          <button
            onClick={(e) => setModalIsOpen(true)}
            className="btn bg-green-600 w-2/4"
          >
            Entradas
          </button>
          <button
            onClick={(e) => setModalIsOpen(true)}
            className="btn bg-red-600 w-2/4"
          >
            Saidas
          </button>
        </section>
        {/* Expanses */}
        <section className="py-6">
          <h3 className="text-3xl py-2 font-bold"> Meus gastos</h3>
          <div className="flex flex-col gap-4 mt-4">
            {DUMMY_DATA.map((expense) => {
              return (
                <ExpanseItem
                  color={expense.color}
                  tittle={expense.tittle}
                  total={expense.total}
                />
              );
            })}
          </div>
        </section>

        {/* Chart Section */}
        <section className="py-6">
          <h3 className="text-3xl font-bold">Gráfico de gastos</h3>
          <div className="w-1/2 mx-auto pt-6">
            <Doughnut
              data={{
                labels: DUMMY_DATA.map((expense) => expense.tittle),
                datasets: [
                  {
                    label: "Gastos",
                    data: DUMMY_DATA.map((expense) => expense.total),
                    backgroundColor: DUMMY_DATA.map((expense) => expense.color),
                    borderColor: ["#18181b"],
                    borderWidth: 5,
                  },
                ],
              }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
