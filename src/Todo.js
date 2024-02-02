import Header from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';

function Todo() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
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
                        <td>No</td>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Completed</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr className="table_datas">
                                    <td className="tb_item">{item.userId}</td>
                                    <td className="tb_item">{item.id}</td>
                                    <td className="tb_item">{item.title}</td>
                                    <td className="tb_item">{item.completed ? 'true' : 'false'}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Todo;