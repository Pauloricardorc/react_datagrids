import { Button } from "primereact/button";

export function ButtonExportCsv(dt: any) {
  const exportCSV = (selectionOnly: boolean) => {
    dt.dt.current.exportCSV({ selectionOnly });
  };

  return (
    <Button
      type="button"
      icon="pi pi-file"
      onClick={() => exportCSV(false)}
      className="mr-2"
      data-pr-tooltip="CSV"
    />
  );
}
