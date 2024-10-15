export enum RowType {
  Header = 'Header',
  Section = 'Section',
  SummaryRow = 'SummaryRow',
  Row = 'Row',
}

export interface IHeader {
  RowType: RowType.Header;
  Cells: ICell[];
}

export interface ISection {
  RowType: RowType.Section;
  Rows: IRow[];
  Title: string;
}

export interface IRow {
  RowType: RowType.Row | RowType.SummaryRow;
  Cells: ICell[];
}

export interface ICell {
  Value: string;
  Attributes?: [];
}
