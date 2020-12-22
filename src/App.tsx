import React from 'react';
import './index.css';
import { Layout, Content } from 'react-mdl';
import Routes from './navigation/Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyNavbar } from './components/MyNavbar';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <MyNavbar />
        <Content>
          <div className="page-content" />
          <Routes />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
