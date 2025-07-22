import './App.css'

function App() {
  const students = [
    { id: 1, name: 'Nguyen Van A', age: 20, address: 'Ha Noi' },
    { id: 2, name: 'Tran Thi B', age: 22, address: 'Da Nang' },
    { id: 3, name: 'Le Van C', age: 21, address: 'Ho Chi Minh' }
  ];

  return (
    <>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App