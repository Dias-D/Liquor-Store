-- CreateTable
CREATE TABLE "customers" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" DATE NOT NULL,

    CONSTRAINT "customers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "alcoholContent" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "currentPrice" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sales" (
    "id" TEXT NOT NULL,
    "IdCustomer" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "salesProducts" (
    "id" TEXT NOT NULL,
    "idSale" TEXT NOT NULL,
    "idProduct" TEXT NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "salesProducts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "sales" ADD CONSTRAINT "sales_IdCustomer_fkey" FOREIGN KEY ("IdCustomer") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salesProducts" ADD CONSTRAINT "salesProducts_idSale_fkey" FOREIGN KEY ("idSale") REFERENCES "sales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "salesProducts" ADD CONSTRAINT "salesProducts_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
