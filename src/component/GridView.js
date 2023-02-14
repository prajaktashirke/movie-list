import Table from 'react-bootstrap/Table';

const GridView = ({movies}) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => <tr key={movie.id}>
          <td>{movie.id}</td>
          <td>{movie.original_title}</td>
          <td>
            <img src={`https://image.tmdb.org/t/p/w92/${movie.poster_path
            }`}></img>
            </td>
        </tr>
        )}
        
      </tbody>
    </Table>
  );
}

export default GridView;