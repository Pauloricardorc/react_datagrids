import { ButtonExecel } from "../../service/exportExcel";
import { ButtonPdf } from "../../service/exportPdf";

export function ActionExport() {
  return (
    <div className="flex align-items-center export-buttons">
      <ButtonExecel />
      <ButtonPdf />
    </div>
  );
}
