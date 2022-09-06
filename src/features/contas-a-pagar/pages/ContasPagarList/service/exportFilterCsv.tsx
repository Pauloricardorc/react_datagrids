import { Button } from "primereact/button";

export function ButtonFilterExportCsv(dt: any) {
  const exportCSV = (selectionOnly: boolean) => {
    dt.dt.current.exportCSV({ selectionOnly });
  };

  return (
    <Button
      type="button"
      icon="pi pi-filter"
      onClick={() => exportCSV(true)}
      className="p-button-info ml-auto"
      data-pr-tooltip="Selection Only"
    />
  );
}
