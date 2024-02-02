import { Link } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';

function Comment() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {

                console.log(error);
            })
    }, [])

    return (
        <div>
            <Header></Header>
            <table border={1} className="t_data">
                <thead>
                    <tr className="table tables">
                        <td>No</td>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Body</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr className="table">
                                    <td>{item.postId}</td>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.body}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Comment;