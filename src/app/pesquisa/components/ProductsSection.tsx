"use client";

import { ProductCard } from "@/src/components/ProductCard";
import type { TProduct } from "@/src/types/Product";
import { FaSadCry } from "react-icons/fa";

interface ProductsSectionProps {
  products: TProduct[];
  page?: number;
}

const productsMock = [
  {
    "id": "clpsekftk0tte0bm42ypt7iyr",
    "nome": "Pagina 1",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/7mmtiMAGRsO3tHz4xClR"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Pagina 2",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "aaaa",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Pagina 3",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Pagina 4",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Pagina 5",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },
  {
    "id": "clpsqihip04820bluoounbp4w",
    "nome": "Motor Elétrico Aberto 4P 0,5CV Trifásico 220/380V - NOVA-M841410B00",
    "imagensDoProduto": [
      {
        "imagemDoProduto": {
          "url": "https://media.graphassets.com/rJMSpIfOR1yOdyO65RpH"
        }
      }
    ]
  },

]

export const ProductsSection = ({ products, page = 1 }: ProductsSectionProps) => {
  const productsPerPage = 3
  const productsSliced = productsMock.slice(page === 1 ? 0 : ((page - 1) * productsPerPage), page * productsPerPage)
  const hasProducts = productsSliced && productsSliced.length > 0;

  return (
    <>
      {!hasProducts && (
        <section className="flex flex-col gap-4 flex-1 justify-center items-center">
          <span className="text-4xl text-blue">
            <FaSadCry />
          </span>

          <span className="text-xl text-center">
            Não encontramos o que você buscava :(
          </span>
        </section>
      )}

      {hasProducts && (
        <section className="w-full">
          <div className="gap-4 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productsSliced?.map((product, index) => (
            <ProductCard
              productAlt={`Imagem do produto ${product.nome}`}
              key={index}
              productName={product.nome}
              imageUrl={product.imagensDoProduto[0].imagemDoProduto.url}
              productLink={`/produto/${product.id}`}
            />
          ))}
          </div>
        </section>
      )}
    </>
  );
};
