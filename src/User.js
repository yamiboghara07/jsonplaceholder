import Header from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';

function User() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {

                console.log(error);
            })
    }, [])


    return (
        <>
            <Header></Header>
            <table border={1} >
                <thead>
                    <tr className="table tables t_data">
                        <td>Id</td>
                        <td>Name</td>
                        <td>UserName</td>
                        <td>Email</td>
                        <td>Address</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index) => {
                            return(
                                <tr className="table_data">
                                    <td className="tb_item">{item.id}</td>
                                    <td className="tb_item">{item.name}</td>
                                    <td className="tb_item">{item.username}</td>
                                    <td className="tb_item">{item.email}</td>
                                    <td>
                                        <ul>
                                            <li><strong>street : </strong>{item.address.street}</li>
                                            <li><strong>suite : </strong>{item.address.suite}</li>
                                            <li><strong>city : </strong>{item.address.city}</li>
                                            <li><strong>zipcode : </strong>{item.address.zipcode}</li>
                                            <li><strong>geo : </strong>
                                                <ul>
                                                    <li><strong>lat:</strong>{item.address.geo.lat}</li>
                                                    <li><strong>lng:</strong>{item.address.geo.lng}</li>

                                                </ul>
                                            </li>

                                        </ul>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default User;