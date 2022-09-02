import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { api } from "../../core/service/axios";
import { CircularProgress } from '@mui/material'

interface IPropsGrid {
id: number,
title:string
price: number,
description:string
category:string
image:string
rating: {
    rate: number
    count: number
}
}

export function GridMaterial() {
  const [products, setProducts] = useState<IPropsGrid[]>([])

  async function getAllProducts() {
    const result = await api.get('products')

    setProducts(result.data)
  }

  useEffect(() => {
    getAllProducts()
  }, [])
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <div style={{ display: 'flex', height: 'calc(100vh - 5rem)' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            sx={{ margin: '0.5rem', borderRadius: 3}}
            columns={[{ field: 'id' }, {field: 'title', width: 500}, {field: 'description', width: 400}, {field: 'price'}, {field: 'category', width: 200}, {field: 'image'}, {field: 'rating-rate'}, {field: 'rating-count'}]}
            rows={products}
            loading={products.length === 0}
          />
        </div>
      </div>
    </div>
  )
}