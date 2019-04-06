import { MatDialog } from "@angular/material/dialog";
import { map } from "rxjs/internal/operators/map";
import { ModalPopupType } from "../../models/modal-popup-type";

export class ModalCore{    
    static open(dialog: MatDialog, ModalComponent, data = {}, width:string = ModalPopupType.Default) {


        const dialogRef = dialog.open(ModalComponent, {
          width: width,
          disableClose: true,
          data: data
        });
    
        return dialogRef.afterClosed().pipe(map(result => {
          return result;
        }));
      }
}