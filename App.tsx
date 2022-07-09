import * as React from 'react';
import Footer from './src/layout/Footer';
import Header from './src/layout/Header';
import Main from './src/layout/Main';
import './style.css';

export default function App() {
  return (




    <div>
      <Header/>
      
      <Main>
      <h1>Hello StackBlitz!</h1>
      
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

      </Main>
      <Footer/>
      
      
      
    </div>
  );
}
