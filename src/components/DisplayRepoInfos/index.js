import React from 'react';

import { Wrapper, Container } from './DisplayRepoInfosStyles';


export default ({ repos, starred }) => {
    return (
        <Wrapper>
            <Container>
            {repos.length > 0 && <h3>Repositories</h3>}
            {repos && repos.map(rep => {
                return (
                    <p key={rep.id}>/{rep.name}</p>
                )
            })}
            </Container>
            <Container>
            {starred.length > 0 && <h3>Starred</h3>}
            {starred && starred.map(rep => {
                return (
                    <p key={rep.id}>/{rep.full_name}</p>
                )
            })}
            </Container>
        </Wrapper>
    )
}