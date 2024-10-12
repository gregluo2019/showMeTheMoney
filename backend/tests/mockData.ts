const mockRow = {
  RowType: "Row",
  Cells: [
    {
      Value: "My Bank Account",
      Attributes: [
        {
          Value: "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
          Id: "account",
        },
      ],
    },
    {
      Value: "126.70",
      Attributes: [
        {
          Value: "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
          Id: "account",
        },
      ],
    },
    {
      Value: "99.60",
      Attributes: [
        {
          Value: "d2e3044e-2fb8-42fa-be17-64c8956d5f57",
          Id: "account",
        },
      ],
    },
  ],
};

const mockSession = {
  RowType: "Section",
  Title: "Bank",
  Rows: [
    mockRow,
    {
      RowType: "Row",
      Cells: [
        {
          Value: "Sample Business",
          Attributes: [
            {
              Value: "84110043-a296-4fb0-aa97-34a45a5d9fc5",
              Id: "account",
            },
          ],
        },
        {
          Value: "92911.00",
          Attributes: [
            {
              Value: "84110043-a296-4fb0-aa97-34a45a5d9fc5",
              Id: "account",
            },
          ],
        },
        {
          Value: "92911.00",
          Attributes: [
            {
              Value: "84110043-a296-4fb0-aa97-34a45a5d9fc5",
              Id: "account",
            },
          ],
        },
      ],
    },
    {
      RowType: "Row",
      Cells: [
        {
          Value: "Sample Business 1",
          Attributes: [
            {
              Value: "38c1c989-0b15-4203-854f-49682610d56a",
              Id: "account",
            },
          ],
        },
        {
          Value: "11039.00",
          Attributes: [
            {
              Value: "38c1c989-0b15-4203-854f-49682610d56a",
              Id: "account",
            },
          ],
        },
        {
          Value: "11039.00",
          Attributes: [
            {
              Value: "38c1c989-0b15-4203-854f-49682610d56a",
              Id: "account",
            },
          ],
        },
      ],
    },
    {
      RowType: "SummaryRow",
      Cells: [
        {
          Value: "Total Bank",
        },
        {
          Value: "104076.70",
        },
        {
          Value: "104049.60",
        },
      ],
    },
  ],
};

const mockData = {
  Status: "OK",
  Reports: [
    {
      ReportID: "BalanceSheet",
      ReportName: "Balance Sheet",
      ReportType: "BalanceSheet",
      ReportTitles: ["Balance Sheet", "Demo Org", "As at 11 October 2024"],
      ReportDate: "11 October 2024",
      UpdatedDateUTC: "/Date(1728641345420)/",
      Fields: [],
      Rows: [
        {
          RowType: "Header",
          Cells: [
            {
              Value: "",
            },
            {
              Value: "11 October 2024",
            },
            {
              Value: "12 October 2023",
            },
          ],
        },
        {
          RowType: "Section",
          Title: "Assets",
          Rows: [],
        },
        mockSession,
      ],
    },
  ],
};

export default mockData;
