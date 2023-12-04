// TableList.js
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Table, Button } from 'antd'
import useCharactersStore from '../store/characters'
import GET_DATA from '../graphql/queries'

function TableList() {  
  const  setCharacters = useCharactersStore(state => state.setCharacters);
  const  characters = useCharactersStore(state => state.characters)
  const { data, loading } = useQuery(GET_DATA);

  useEffect(() => {
    // Actualizar el estado del store cuando cambien los datos
    setCharacters(data?.characters.results)
  }, [data, setCharacters]);

  const removeItem = (record) => {
    console.log('removeItem  removeItem', characters)
      const filter = characters.filter( value => {
             return value.id !== (record.id)
      })
      setCharacters(filter)
  }


  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Species',
      dataIndex: 'species',
      key: 'species'
    },
    {
      title: 'Action',
      key: 'action',
      sorter: true,
      render: (text, record) => (
        <Button danger type="primary" onClick={() => removeItem(record)}>
          Delete
        </Button>

      ),
    },
  ];

  if (loading) return <p>Cargando...</p>;
  return (
      <Table
      columns={columns}
      dataSource={characters}
      rowKey={(record) => record.id}
      // onRow={(record) => {
      //     return {
      //       onClick: () => {
      //          setSelected(record)
      //       }
      //     };
      //   }}
      />
   )
}


export default TableList;
