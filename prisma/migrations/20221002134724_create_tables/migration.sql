-- CreateTable
CREATE TABLE "clientes" (
    "id" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "DataNascimento" DATE NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "catalogos" (
    "id" TEXT NOT NULL,
    "Marca" TEXT NOT NULL,
    "Classificacao" TEXT NOT NULL,
    "Nome" TEXT NOT NULL,
    "TeorAlcoolico" TEXT NOT NULL,
    "Regiao" TEXT NOT NULL,
    "PrecoAtual" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "catalogos_pkey" PRIMARY KEY ("id")
);
