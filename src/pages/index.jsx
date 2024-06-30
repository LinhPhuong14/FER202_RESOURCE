import React, { useState } from "react"
import useFetch from "../hooks/useFetch"
import { Container, Table } from "react-bootstrap"

const Home = () => {
const [url, setUrl] = useState("/departments/");
    const[data, isLoading, error] = useFetch(url)

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

export default Home
