// import { createContext, ReactNode, useState } from "react";
// import { FilterMatchMode, FilterOperator } from "primereact/api";

// interface GridProviderProps {
//   children: ReactNode;
// }

// export const GridContext = createContext({} as any);

// export function GridProvider({ children }: GridProviderProps) {
//   const [, setFilters1] = useState<any>([]);
//   const [, setGlobalFilterValue1] = useState("");

//   const initFilters1 = () => {
//     setFilters1({
//       global: { value: null, matchMode: FilterMatchMode.CONTAINS },
//       name: {
//         operator: FilterOperator.AND,
//         constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
//       },
//       "country.name": {
//         operator: FilterOperator.AND,
//         constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
//       },
//       representative: { value: null, matchMode: FilterMatchMode.IN },
//       date: {
//         operator: FilterOperator.AND,
//         constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
//       },
//       balance: {
//         operator: FilterOperator.AND,
//         constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
//       },
//       status: {
//         operator: FilterOperator.OR,
//         constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
//       },
//       activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
//       verified: { value: null, matchMode: FilterMatchMode.EQUALS },
//     });
//     setGlobalFilterValue1("");
//   };

//   return <GridContext.Provider value={}>{children}</GridContext.Provider>;
// }
