import { Button, Form, Input, Checkbox, Radio, DatePicker, Select, Col, Row } from 'antd';
import TableList from './Table';
import useCharactersStore from '../store/characters'

function Home() {
  const [form] = Form.useForm();
  const { characters, setCharacters } = useCharactersStore();

  const onFinish = () => {
    console.log('username!!!!', form.getFieldValue('username'));
    console.log('password!!!!', form.getFieldValue('password'));
    console.log('remember!!!!', form.getFieldValue('remember'));
    console.log('gender!!!!', form.getFieldValue('gender'));
    console.log('fecha!!!!', form.getFieldValue('fecha'));
    console.log('parent!!!!', form.getFieldValue('parent'));

    addItem({name: form.getFieldValue('username'), species: form.getFieldValue('password')});
  };

  const addItem = (record) => {
     const ncharacters = [...characters]
     const id = parseInt(ncharacters[ncharacters.length - 1].id) + 1
     record.id = id.toString()
     ncharacters.push(record)
     setCharacters(ncharacters)
  }

  return (
    <Row style={{width: '100vw'}}>
      <Col span={6}>
      <Form
    form={form}
    onFinish={onFinish}
    name="wrap"
    labelCol={{
      flex: '110px'
    }}
    labelAlign="left"
    labelWrap
    wrapperCol={{
      flex: 1,
    }}
    colon={false}
    style={{
      maxWidth: 600,
      padding: '25px'
    }}
  >
    <Form.Item
      label="Name"
      name="username"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Specie"
      name="password"
      rules={[
        { 
          required: true,
        },
      ]}
    >
       <Input />
    </Form.Item>

    <Form.Item label="Remember me" name="remember" valuePropName="checked" style={{textAlign: 'right'}}>
        <Checkbox></Checkbox>
    </Form.Item>
    <Form.Item label="Gender" name="gender" style={{textAlign: 'right'}}>
        <Radio.Group>
            <Radio value="female">Female</Radio>
            <Radio value="male">Male</Radio>
        </Radio.Group>
    </Form.Item>
    <Form.Item label="Fecha" name="fecha" style={{textAlign: 'right'}}>
     <DatePicker/>
    </Form.Item>

    <Form.Item name="parent" label="Parent" style={{textAlign: 'right'}}>
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        options={[
          { value: 'jack', label: 'Jack' },
          { value: 'lucy', label: 'Lucy' },
          { value: 'Yiminghe', label: 'yiminghe' },
          { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
      />
    </Form.Item>

    <Form.Item>
      <Button block type="primary" htmlType="submit" size="full">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Col>
      <Col span={18}   
      style={{
        paddingTop: '25px'
      }}>
        <TableList/>
      </Col>
  </Row>
   
  )
}
export default Home