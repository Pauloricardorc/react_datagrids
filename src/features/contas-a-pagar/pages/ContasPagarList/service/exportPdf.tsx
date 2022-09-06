import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { api } from "../../../../../core/service/axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface IPropsGrid {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  status: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export function ButtonPdf() {
  const [products, setProducts] = useState<IPropsGrid[]>([]);

  async function getProducts() {
    const result = await api.get("products");

    setProducts(result.data);
  }

  const cols = [
    { field: "id", header: "Id" },
    { field: "title", header: "Title" },
    { field: "category", header: "Category" },
    { field: "status", header: "Status" },
  ];

  const exportColumns = cols.map((col) => ({
    title: col.header,
    Id: col.field,
  }));

  useEffect(() => {
    getProducts();
  }, []);

  async function exportPdf() {
    const doc = new jsPDF();
    const body = await products.map((product) => [
      product.id,
      product.title,
      product.category,
      product.status,
    ]);
    // Or use javascript directly:
    await autoTable(doc, {
      head: [exportColumns],
      body: body,
    });

    alert("finalized");
    doc.save("products.pdf");
  }

  return (
    <Button
      type="button"
      icon="pi pi-file-pdf"
      onClick={exportPdf}
      className="p-button-warning mr-2"
      style={{ background: "#FFC138" }}
      data-pr-tooltip="PDF"
    />
  );
}
