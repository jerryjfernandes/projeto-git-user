import React from 'react';
import axios from 'axios'

const baseUrl = 'https://api.github.com/users'


export default ({ children, username, endpoint, clickFunc }) => {

    const req = async () => {
        try {
            const result = await axios.get(`${baseUrl}/${username}/${endpoint}`)
            clickFunc(result.data)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div>
            <button onClick={req}>{children}</button>
        </div>
    )
}