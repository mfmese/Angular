import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ModalCore } from 'src/app/core/helper/modal.core';

@Component({
  selector: 'modal-popup-list',
  templateUrl: './modal-popup-list.component.html',
  styleUrls: ['./modal-popup-list.component.css']
})
export class ModalPopupListComponent implements OnInit {

  @Input('list') list;
  @Input('columns') columns;
  @Input('displayedColumns') displayedColumns;
  @Input('dataSource') dataSource;
  @Input('dialogRef') dialogRef;
  @Input('data') data;

  @Input('dialogData') dialogData;
  @Input('dialogComponent') dialogComponent;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.list = this.data.values === undefined ? [] : this.data.values;
    this.refreshDataTable();
  }

  remove(value) {
    this.list.splice(this.list.indexOf(value), 1);
    this.refreshDataTable();
  }

  cancel(): void {
    this.dialogRef.close();
  }

  refreshDataTable() {

    if (this.list !== undefined && this.list.length > 0) {
      let itemIndex = this.list.findIndex(item => item.primary == true);
      if (itemIndex < 0)
        this.list[0].primary = true;
    }


    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  private getPrimary(result, values) {
    let valueRecs = [];
    if (result.primary === true) {
      values.forEach(element => {
        element.primary = false;
        valueRecs.push(element);
      })
    }
    return valueRecs;
  }

  matIcon = "";
  getValue(value) {
    this.matIcon = "";
    if (value === true)
      this.matIcon = "done";

    if (value !== undefined && value.Value !== undefined)
      return value.Value;
    else if (value === true || value === false)
      return "";

    return value;
  }

  openDialog(value): void {
    this.dialogData.value = {};

    // insert
    if (value === undefined) {
      ModalCore.open(this.dialog, this.dialogComponent, this.dialogData)
        .subscribe(result => {
          if (result !== undefined) {
            if (this.getPrimary(result, this.list).length !== 0) {
              this.list = this.getPrimary(result, this.list);
            }
            this.list.push(result);
            this.refreshDataTable();
          }
        });
    }
    // update
    else {
      this.dialogData.value = JSON.parse(JSON.stringify(value));
      ModalCore.open(this.dialog, this.dialogComponent, this.dialogData)
        .subscribe(result => {
          if (result !== undefined) {
            if (this.getPrimary(result, this.list).length !== 0) {
              this.list = this.getPrimary(result, this.list);
            }
            let itemIndex = this.list.findIndex(item => item.id == result.id);
            this.list[itemIndex] = result;
            this.refreshDataTable();
          }
        });
    }
  }

}
