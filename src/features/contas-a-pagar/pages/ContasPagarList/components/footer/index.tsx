import { ButtonExportCsv } from "../../service/exportCsv";
import { ButtonExportExcel } from "../../service/exportExcel";
import { ButtonFilterExportCsv } from "../../service/exportFilterCsv";
import { ButtonExportPdf } from "../../service/exportPdf";

export function ActionExport(dt: any) {
  return (
    <div className="flex align-items-center export-buttons">
      <ButtonExportExcel />
      <ButtonExportPdf />
      <ButtonExportCsv dt={dt} />
      <ButtonFilterExportCsv dt={dt} />
    </div>
  );
}
