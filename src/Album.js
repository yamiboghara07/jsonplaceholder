import Header from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';

function Album() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
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
            <table border={1}>
                <thead >
                    <tr className="table tables t_data">
                        <td>No</td>
                        <td>Id</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr className="tabl tb_item">
                                    <td>{item.userId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Album;