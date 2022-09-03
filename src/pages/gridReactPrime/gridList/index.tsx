import { useEffect, useState } from "react";
import { Column } from "primereact/column";
import { api } from "../../../core/service/axios";
import { PersonalizedCard, PersonalizedGrid } from "./styles";
import { priceFormatter } from "../../../core/utils/formatter";

//filtro
import { FilterMatchMode, FilterOperator } from "primereact/api";

export function GridPrime() {
  const [first2, setFirst2] = useState(0);
  const [rows2, setRows2] = useState(21);
  const [, setCurrentPage] = useState<any>(1);

  const [products, setProducts] = useState<[]>([]);

  async function getAllProducts() {
    const result = await api.get("products");

    setProducts(result.data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  //Formação de campo de preços
  const formatterPrice = (rowData: { price: number | bigint }) => {
    return priceFormatter.format(rowData.price);
  };

  //paginação
  const onCustomPage2 = (event: any) => {
    setFirst2(event.first);
    setRows2(event.rows);
    setCurrentPage(event.page + 1);
  };

  const template2: any = {
    layout: "RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink",
    CurrentPageReport: (options: any) => {
      return (
        <span
          style={{
            color: "var(--text-color)",
            userSelect: "none",
            width: "120px",
            textAlign: "center",
          }}
        >
          {options.first} - {options.last} of {options.totalRecords}
        </span>
      );
    },
  };

  const rowClass = (products: { category: string }) => {
    return {
      "row-accessories": products.category === "jewelery",
    };
  };

  return (
    <PersonalizedCard>
      <div className="card">
        <PersonalizedGrid
          size="small"
          value={products}
          filterDisplay="menu"
          globalFilterFields={["title", "category", "price"]}
          rowClassName={rowClass}
          showGridlines
          paginator
          paginatorTemplate={template2}
          first={first2}
          rows={rows2}
          onPage={onCustomPage2}
          resizableColumns
          columnResizeMode="fit"
          paginatorClassName="justify-content-end"
          responsiveLayout="scroll"
        >
          <Column field="id" header="Id" align={"center"}></Column>
          <Column
            field="title"
            header="Title"
            filter
            filterPlaceholder="Search by name"
            style={{ minWidth: "12rem" }}
            sortable
          ></Column>
          <Column
            field="price"
            header="Price"
            filter
            body={formatterPrice}
          ></Column>
          <Column field="category" filter header="Category"></Column>
        </PersonalizedGrid>
      </div>
    </PersonalizedCard>
  );
}
