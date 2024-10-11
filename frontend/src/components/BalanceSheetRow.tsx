'use client';
import { useFetchData } from '/src/hooks/useFetchData';

export function BalanceSheetRow({ row }: { row: IRow }) {
  const { data, loading } = useFetchData('http://localhost:3001/api/balance');
  const reportsRows = data?.Reports[0]?.Rows;
  console.log({ data });
  console.log({ reportsRows });

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <table border='1' style={{ borderCollapse: 'collapse', width: '70%', margin: '20px auto' }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {reportsRows?.map((item, index) => (
          <tr key={index}>
            <td>{item.RowType}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
