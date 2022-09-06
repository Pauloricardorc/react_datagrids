import { ButtonExcel } from "../../service/exportExcel";
import { ButtonPdf } from "../../service/exportPdf";

export function ActionExport() {
  return (
    <div className="flex align-items-center export-buttons">
      <ButtonExcel />
      <ButtonPdf />
    </div>
  );
}
