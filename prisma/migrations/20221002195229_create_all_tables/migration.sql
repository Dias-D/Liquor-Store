-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "DataNascimento" DATE NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" TEXT NOT NULL,
    "Marca" TEXT NOT NULL,
    "Classificacao" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "TeorAlcoolico" TEXT NOT NULL,
    "Regiao" TEXT NOT NULL,
    "PrecoAtual" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "vendas" (
    "id" TEXT NOT NULL,
    "IdCliente" TEXT NOT NULL,
    "Data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "vendas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "itens" (
    "id" TEXT NOT NULL,
    "IdVenda" TEXT NOT NULL,
    "IdProduto" TEXT NOT NULL,
    "PrecoUnitario" DOUBLE PRECISION NOT NULL,
    "Quantidade" INTEGER NOT NULL,

    CONSTRAINT "itens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vendas" ADD CONSTRAINT "vendas_IdCliente_fkey" FOREIGN KEY ("IdCliente") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_IdVenda_fkey" FOREIGN KEY ("IdVenda") REFERENCES "vendas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "itens" ADD CONSTRAINT "itens_IdProduto_fkey" FOREIGN KEY ("IdProduto") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
