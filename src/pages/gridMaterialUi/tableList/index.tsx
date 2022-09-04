import { Chip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Prohibit } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../../../core/service/axios";
import { priceFormatter } from "../../../core/utils/formatter";
import { ComponentModal } from "./../components/modal";
import { Container } from "./styles";

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

export function GridMaterial() {
  const [page, setPage] = useState<number>(20);
  const [products, setProducts] = useState<IPropsGrid[]>([]);

  async function getAllProducts() {
    const result = await api.get("products");

    setProducts(result.data);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <div style={{ display: "flex", height: "calc(100vh - 5rem)" }}>
        <Container>
          <DataGrid
            density={"compact"}
            sx={{ margin: "0.5rem", borderRadius: 3 }}
            checkboxSelection={true}
            rowsPerPageOptions={[20, 50, 100]}
            onPageSizeChange={(newPageSize) => setPage(newPageSize)}
            pageSize={page}
            pagination
            showColumnRightBorder={true}
            showCellRightBorder={true}
            headerHeight={90}
            components={{ Toolbar: GridToolbar }}
            // getRowClassName={(params) => `row-${params.row.status}`} // demo ( demarcação da linha de produtos recentes)
            columns={[
              // id
              { field: "id" },
              // title
              {
                field: "title",
                headerName: "Nome",
                width: 500,
              },
              //descrição
              { field: "description", headerName: "Descrição", width: 400 },
              // preço
              {
                field: "price",
                headerName: "Preço",
                renderCell: (params) => {
                  return priceFormatter.format(params.value);
                },
              },
              // categoria
              { field: "category", width: 200 },
              // status
              {
                field: "status",
                headerAlign: "center",
                align: "center",
                description: "Produto é novo ?",
                cellClassName: (params) => `status-${params.value}`,
                renderCell: (params) => {
                  return (
                    <Chip
                      className="container-status"
                      label={params.formattedValue}
                    />
                  );
                },
              },
              // image
              {
                field: "image",
                width: 100,
                headerName: "Image",
                headerAlign: "center",
                align: "center",
                renderCell: (params) => {
                  return (
                    <>
                      {params.value ? (
                        <ComponentModal
                          title={params.row.title}
                          image={params.value}
                        />
                      ) : (
                        <Prohibit size={24} />
                      )}
                    </>
                  );
                },
              },
            ]}
            rows={products}
            loading={products.length === 0}
          />
        </Container>
      </div>
    </div>
  );
}
