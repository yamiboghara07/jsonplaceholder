import Header from "./Header";
import { useEffect, useState } from "react";
import axios from 'axios';

function Photo() {

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
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
            <div className="cards">
                {
                    data.map((item, index) => {
                        return (
                            <div className="card_data">
                                <div className="card">
                                    <div>
                                        <img src={item.thumbnailUrl}></img>
                                    </div>
                                    <div className="card_text">
                                        <p>{item.albumId}</p>
                                        <p>{item.id}</p>
                                        <h3>{item.title}</h3>
                                        <div className="card_btn"><a href="#">read more</a></div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}
export default Photo;