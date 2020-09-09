import React from 'react';

import { Wrapper, Avatar, Infos } from './DisplayUserStyles';

export default ({ user }) => {
    return (
        <Wrapper>
            <Avatar src={user.avatar_url} />
            <Infos>
                <p>Usuário: {user.login}</p>
                <p>Nome: {user.name}</p>
                <a href={user.html_url} target="_blank" rel="noopener noreferrer">Ver Perfil</a>
            </Infos>
        </Wrapper>
    )
}