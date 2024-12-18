import React, { useState } from "react"

export const Form = () => {

    const [artist, setArtist] = useState("")
    const [album, setAlbum] = useState("")
    const [songtitle, setSongtitle] = useState("")
    const [releaseyear, setReleaseyear] = useState("")

    let url = import.meta.env.VITE_URL
    let token = import.meta.env.VITE_TOKEN

    const changehandlerartist = (event) => {
        artist = event.target.value
    }

    const changehandleralbum = (event) => {
        album = event.target.value
    }

    const changehandlersongtitle = (event) => {
        songtitle = event.target.value
    }

    const changehandlerreleaseyear = (event) => {
        releaseyear = event.target.value
    }


    const submitHandler = async (event) => {

        event.preventDefault()
        let tempsongplaylist = {
            artist,
            album,
            songtitle,
            releaseyear
        }
        let newURL = `${url}/playlistsongs`
        let response = await fetch(newURL,{
            method: POST,
            headers:{
            'Authorization': token,
            'apikey': token,
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(tempsongplaylist)
    }) 
    }





    return (
        <>
            <h1>playlist Form</h1>
            <div className='container-fluid'>
                <form onSubmit={submitHandler}>


                    <div className="mb-3">
                        <label className="artist" class="form-label">Artist</label>
                        <input type="text" class="form-control" id="artist" placeholder="enter artist"></input>
                    </div>

                    <div className="mb-3">
                        <label className="album" class="form-label">Album</label>
                        <input type="text" class="form-control" id="album" placeholder="enter album"></input>
                    </div>

                    <div className="mb-3">
                        <label className="songtitle" class="form-label">songtitle</label>
                        <input type="text" class="form-control" id="songtitle" placeholder="enter songtitle"></input>
                    </div>

                    <div className="mb-3">
                        <label className="releaseyear" class="form-label">releaseyear</label>
                        <input type="text" class="form-control" id="album" placeholder="enter releaseyear"></input>
                    </div>



                    <button className="btn btn-success w-100">send request</button>

                </form>
            </div>
        </>
    )
}