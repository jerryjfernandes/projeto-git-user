import React from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';

import { Form } from './SearchBarStyles';

const baseUrl = 'https://api.github.com/users'


export default ({ setUser, setRepos, setStarred }) => {
    const { form, onChange } = useForm({search:''});
    const { search } = form;

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        onChange(name, value);
    }

    const getUser = async () => {
        try {
            const result = await axios.get(`${baseUrl}/${search}`)
            setUser(result.data)
        } catch(err) {
            alert("Usuário não encontrado")
            console.log(err)
        }
    }

    const searchUser = (e) => {
        e.preventDefault();
        getUser(search)
        setRepos([])
        setStarred([])
    }

    return (
        <div>
            <Form onSubmit={searchUser}>
                <input
                    value={search}
                    name="search"
                    onChange={handleInputChange}
                    placeholder="Buscar usuário"
                />
                <button type="submit">Pesquisar</button>
            </Form>
        </div>
    )
}