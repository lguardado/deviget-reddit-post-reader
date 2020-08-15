import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar'
import Details from './containers/Details/Details'

function App() {
  return (
    <Layout>
        <Sidebar />
        <Details />
    </Layout>
  );
}

export default App;
