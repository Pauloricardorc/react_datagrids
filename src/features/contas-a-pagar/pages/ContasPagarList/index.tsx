import "./ContasPagarList.css";

import { FilterMatchMode, FilterOperator } from "primereact/api";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import { Ripple } from "primereact/ripple";

import { useEffect, useRef, useState } from "react";

import { Dropdown } from "primereact/dropdown";
import { api } from "../../../../core/service/axios";
import React from "react";
import { ActionExport } from "./components/footer/index";
import { classNames } from "primereact/utils";

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

export const ContasPagarListDT = () => {
  const [products, setProducts] = useState<IPropsGrid[]>([]);
  const [multiSortMeta, setMultiSortMeta] = useState([
    { field: "category", order: -1 },
  ]);
  const [selectedProducts, setSelectedProducts] = useState(null);
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState<any>(null);
  const [expandedRows, setExpandedRows] = useState([]);
  const [rowsGroup, setRowsGroup] = useState<any>("");
  const [currentPage, setCurrentPage] = useState<any>(1);
  const [pageInputTooltip, setPageInputTooltip] = useState(
    "Pressione 'Enter' para ir até a página."
  );
  const [first1, setFirst1] = useState(0);
  const [rows1, setRows1] = useState(10);

  const dt = useRef(null);

  async function getProducts() {
    const result = await api.get("products");

    setProducts(result.data);
  }

  useEffect(() => {
    getProducts();
    initFilters1();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const formatCurrency = (value: any) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const priceBodyTemplate = (rowData: any) => {
    return formatCurrency(rowData.price);
  };

  const initFilters1 = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },

      id: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },

      title: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
      },

      category: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
      },

      status: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },

      price: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
    });
    setGlobalFilterValue1("");
  };

  const clearFilter1 = () => {
    initFilters1();
    setRowsGroup("");
  };

  const onGlobalFilterChange1 = (e: any) => {
    const value = e.target.value;
    let _filters1: any = { ...filters1 };
    _filters1["global"].value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };

  const onRowGroupChange = (e: any) => {
    setRowsGroup(e.value);
  };

  const columns = [{ name: "category" }];

  console.log(rowsGroup);

  const renderHeader1 = () => {
    return (
      <>
        <div className="flex justify-content-between">
          <Button
            type="button"
            icon="pi pi-filter-slash"
            label="Limpar"
            className="p-button-outlined"
            onClick={clearFilter1}
          />

          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilterValue1}
              onChange={onGlobalFilterChange1}
              placeholder="Pesquisar"
            />
          </span>

          {/* <Button
            type="button"
            label="Agrupar"
            className="p-button-outlined"
            onClick={ () => setRowsGroup(!rowsGroup) }
          /> */}
          <div>
            <Dropdown
              value={rowsGroup}
              options={columns}
              onChange={onRowGroupChange}
              optionLabel="name"
              placeholder="Agrupar coluna"
            />
            {/* <select
              value={rowsGroup}
              onChange={(e) => setRowsGroup(e.target.value)}
              name=""
              id=""
            >
              <option value="">Nenhum</option>
              <option value="name">Categoria</option>
            </select> */}
          </div>
        </div>
      </>
    );
  };

  const renderFooter1 = () => {
    return (
      <>
        <ActionExport />
      </>
    );
  };

  const header1 = renderHeader1();
  const footer1 = renderFooter1();

  const calculateCustomerTotal = (category: string) => {
    let total = 0;

    if (products) {
      for (let product of products) {
        if (product.category === category) {
          total++;
        }
      }
    }

    return total;
  };

  const template1 = {
    layout:
      "PrevPageLink PageLinks NextPageLink RowsPerPageDropdown CurrentPageReport",
    PrevPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Anterior</span>
          <Ripple />
        </button>
      );
    },
    NextPageLink: (options: any) => {
      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
          disabled={options.disabled}
        >
          <span className="p-3">Próximo</span>
          <Ripple />
        </button>
      );
    },
    PageLinks: (options: any) => {
      if (
        (options.view.startPage === options.page &&
          options.view.startPage !== 0) ||
        (options.view.endPage === options.page &&
          options.page + 1 !== options.totalPages)
      ) {
        const className = classNames(options.className, { "p-disabled": true });

        return (
          <span className={className} style={{ userSelect: "none" }}>
            ...
          </span>
        );
      }

      return (
        <button
          type="button"
          className={options.className}
          onClick={options.onClick}
        >
          {options.page + 1}
          <Ripple />
        </button>
      );
    },
    RowsPerPageDropdown: (options: any) => {
      const dropdownOptions = [
        { label: 10, value: 10 },
        { label: 20, value: 20 },
        { label: 50, value: 50 },
        { label: "Todos", value: options.totalRecords },
      ];

      return (
        <Dropdown
          value={options.value}
          options={dropdownOptions}
          onChange={options.onChange}
        />
      );
    },
    CurrentPageReport: (options: any) => {
      return (
        <span
          className="mx-3"
          style={{ color: "var(--text-color)", userSelect: "none" }}
        >
          Ir para{" "}
          <InputText
            size={2}
            className="ml-1"
            value={currentPage}
            tooltip={pageInputTooltip}
            onKeyDown={(e) => onPageInputKeyDown(e, options)}
            onChange={onPageInputChange}
          />
        </span>
      );
    },
  };

  const onPageInputKeyDown = (event: any, options: any) => {
    if (event.key === "Enter") {
      const page = parseInt(currentPage);
      if (page < 1 || page > options.totalPages) {
        setPageInputTooltip(
          `Value must be between 1 and ${options.totalPages}.`
        );
      } else {
        const first = currentPage ? options.rows * (page - 1) : 0;

        setFirst1(first);
        setPageInputTooltip("Press 'Enter' key to go to this page.");
      }
    }
  };

  const onPageInputChange = (event: any) => {
    setCurrentPage(event.target.value);
  };

  const onCustomPage1 = (event: any) => {
    setFirst1(event.first);
    setRows1(event.rows);
    setCurrentPage(event.page + 1);
  }

  const headerTemplate = (data: any) => {
    return (
      <>
        <span className="image-text">
          {data.category} -{" "}
          <strong>
            Total de Produtos: {calculateCustomerTotal(data.category)}
          </strong>
        </span>
      </>
    );
  };
  return (
    <div>
      <div className="card">
        <h1>Contas a pagar</h1>
        <Tooltip target=".export-buttons>button" position="bottom" />

        <DataTable
          ref={dt}
          value={products}
          dataKey="id"
          sortMode="multiple"
          // sortField={}
          responsiveLayout="scroll"
          reorderableColumns
          resizableColumns
          showGridlines
          selection={selectedProducts}
          onSelectionChange={(e) => setSelectedProducts(e.value)}
          filters={filters1}
          filterDisplay="menu"
          header={header1}
          footer={footer1}
          globalFilterFields={[
            "global",
            "id",
            "title",
            "category",
            "status",
            "price",
          ]}
          emptyMessage="Nenhum dado encontrado."
          expandableRowGroups={rowsGroup}
          expandedRows={expandedRows}
          onRowToggle={(e: any) => setExpandedRows(e.data)}
          rowGroupMode={rowsGroup === "" ? "" : "subheader"}
          groupRowsBy="category"
          // rowGroupFooterTemplate={headerCount}
          rowGroupHeaderTemplate={headerTemplate}
          paginator
          // paginatorTemplate={template1}
          first={first1}
          rows={rows1}
          onPage={onCustomPage1}
        >
          <Column
            selectionMode="multiple"
            headerStyle={{ width: "3em" }}
          ></Column>
          <Column field="id" header="Id" filter sortable></Column>
          <Column field="title" header="Nome" filter sortable></Column>
          <Column field="category" header="Categoria" filter sortable></Column>
          <Column field="status" header="Status" filter sortable></Column>
          <Column
            field="price"
            header="Preço"
            body={priceBodyTemplate}
            filter
            sortable
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};
