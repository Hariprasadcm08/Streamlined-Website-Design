import React,{useState, useEffect} from 'react';
import axios from 'axios';
import '../Styles/DashboardPage.css'

export default function DashBoardPage() {
    const [data, setData] = useState([]);
   
    useEffect(() => {
        axios.get("https://debasree-breand-radiator-backend.onrender.com/form").then((res) => {
            console.log(res.data.getFormtData)
            setData(res.data.getFormtData)
            
        }).catch((error) => {
            console.log(error)
        })
        
    }, [])



    const headers = data.length > 0 ? Object.keys(data[0]).filter(header => header !== '_id' && header !== 'modifiedOn').map(header => {
        if (header === 'firstName') {
            return 'First Name';
        }
        else if(header === "lastName"){
            return "Last Name";
        }
        else if (header === "email") {
            return "Email";
        }
        else if (header === "contactNo") {
            return "Mobile No";
        }
        else if (header === "description") {
            return "Concern";
        }
        else if (header === "createOn") {
            return "Date";
        }
        return header;
    }) : [];

    return <div>
        {data.length === 0 ? (
            <div>Loading...</div>
        ) : (
            <div>
                <table>
                    <thead>
                        <tr>
                            {headers.map(header => (
                                <th key={header}>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(row => (
                            <tr key={row._id}>
                                {Object.keys(row).filter(header => header !== '_id' && header !== 'modifiedOn').map(header => (
                                    <td key={header}>
                                        {header === 'createOn' ? row[header].substring(0, 10) : row[header]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )}
    </div> 
                        
    }