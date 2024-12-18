import React from 'react'
import { useEffect, useState } from "react"

export const Report = () => {
    let url = import.meta.env.VITE_URL
    let token = import.meta.env.VITE_TOKEN
    const [data, setData] = useState([])
    const getReport = async () => {
        let newURL = `${url}/playlistsongs?order=id.desc`

        let response = await fetch(newURL, {
            method: "GET",
            headers: {
                "Authorization": token,
                "apikey": token
            }
        })
        if (response.ok) {
            let data = await response.json()
            setData(data)
        }
    }
    useEffect(() => {
        getReport()

    }, [])


    return (
        <>
            <h1>report</h1>
            <table className="table">
    
                <thead>
                    <tr>
                        
                        <th>song title</th>
                        <th>artist</th>
                        <th>album</th>
                        <th>release year</th>
                        <th>created_at</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.songtitle}</td>
                                <td>{item.artist}</td>
                                <td>{item.album}</td>
                                <td>{item.releaseyear}</td>
                                <td>{item.created_at}</td>

                            </tr>

                        ))
                    }

                </tbody>
            </table>

            
        </>
    )
}