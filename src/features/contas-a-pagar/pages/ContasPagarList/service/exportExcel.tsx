import { Button } from "primereact/button";
import { useEffect, useState } from "react";
import { api } from "../../../../../core/service/axios";

export function ButtonExportExcel() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const result = await api.get("products");

    setProducts(result.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(products);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, "products");
    });
  };

  const saveAsExcelFile = (buffer: any, fileName: any) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  return (
    <Button
      type="button"
      icon="pi pi-file-excel"
      onClick={exportExcel}
      className="p-button-success mr-2"
      style={{ background: "#22CA69" }}
      data-pr-tooltip="XLS"
    />
  );
}
