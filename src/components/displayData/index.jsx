import React from 'react'
import { useState, useEffect } from 'react'
import {instance} from '../../utils'
import { Container, Table } from 'react-bootstrap'
import {useFetch} from '../../hooks'

export const Display = () => {
    const [repo, setRepo] = useState("http://localhost:9999/user")
    const { data, isLoading, err } = useFetch(repo)
    // const [data, setData] = useState([])
    
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await instance.get('/user')
    //     setData(res.data)
    //     }
    //     fetchData()
    // }, [])
  return (
    <Container>
            <Table striped bordered responsive hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Employee name</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    { !data ? <tr><td colSpan={ 5 }>Loading...</td></tr> : data.map(e => (

                        <tr key={ e.id }>
                            <td>{ e.id }</td>
                            <td>{ e.name }</td>
                            <td>{ e.dob }</td>
                            <td>{ e.gender }</td>
                            <td>{ e.position }</td>
                        </tr>
                    )) }
                </tbody>
            </Table>
        </Container>
  )
}
