export interface IHeader {
  RowType: 'Header';
  Cells: ICell[];
}

export interface ISection {
  RowType: 'Section';
  Rows: IRow[];
  Title: string;
}

export interface IRow {
  RowType: 'Row' | 'SummaryRow';
  Cells: ICell[];
}

export interface ICell {
  Value: string;
  Attributes?: [];
}
