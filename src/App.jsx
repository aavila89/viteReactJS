import './App.css'
import Home from './components/Home'
import { Layout, Space } from 'antd'
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  //backgroundColor: '#108ee9',
  height: '100vh',
  display: 'flex',
  //alignItems: 'center',
  alignSelf: 'center',
  paddingTop: '10px '
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


function App() {
  return (
    <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Home/>
        </Content>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Space>
  )
}

export default App
