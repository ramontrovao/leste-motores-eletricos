"use client";

import { TProduct } from "@/src/types/Product";
import { useState } from "react";

interface ProductInfosProps {
  product: TProduct;
}

export const ProductInfos = ({
  product: { descricao, caracteristicas },
}: ProductInfosProps) => {
  const [infoActive, setInfoActive] = useState<
    "description" | "characteristic"
  >("description");

  const descriptionBorderColor =
    infoActive === "description" ? "#FFCD29" : "transparent";
  const characteristicBorderColor =
    infoActive === "characteristic" ? "#FFCD29" : "transparent";

  const isDescriptionActive = infoActive === "description";
  const isCharacteristicActive = infoActive === "characteristic";

  const handleChangeInfoActive = (
    infoActiveName: "description" | "characteristic"
  ) => {
    setInfoActive(infoActiveName);
  };

  return (
    <div className="bg-white rounded-lg p-4 w-full">
      <header className="flex">
        <button
          onClick={() => handleChangeInfoActive("description")}
          className="bg-transparent text-gray-500 text-md md:text-lg p-4 border-b-2 border-solid duration-300 transition-all"
          style={{ borderColor: descriptionBorderColor }}>
          Descrição do produto
        </button>

        <button
          onClick={() => handleChangeInfoActive("characteristic")}
          className="bg-transparent text-gray-500 text-md md:text-lg p-4 border-b-2 border-solid duration-300 transition-all"
          style={{ borderColor: characteristicBorderColor }}>
          Características
        </button>
      </header>

      <main className="p-4 h-56 overflow-y-scroll">
        {isDescriptionActive && <p>{descricao}</p>}
        {isCharacteristicActive && (
          <ul className="list-disc">
            {caracteristicas.map((caracteristica) => (
              <li key={caracteristica.id}>{caracteristica.nome}</li>
            ))}
          </ul>
        )}
      </main>
    </div>
  );
};
