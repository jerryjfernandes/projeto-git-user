import React, { useState } from 'react';
import DisplayUser from './components/DisplayUser';
import SearchBar from './components/SearchBar';
import Button from './components/Button';
import DisplayRepoInfos from './components/DisplayRepoInfos';

import { Container, Title } from './AppStyles'

const userFake = {
    avatar_url: 'https://www.techcentral.ie/wp-content/uploads/2019/11/GitHub-Mark.png', 
    login: '---', 
    name: '---'
}

export default () => {
    const [ user, setUser ] = useState(userFake)
    const [ repos, setRepos ] = useState([])
    const [ starred, setStarred ] = useState([])

    return (
        <Container>
            <Title>GitUser</Title>
            <DisplayUser user={user} />
            <SearchBar setUser={setUser} setRepos={setRepos} setStarred={setStarred} />
            <Button username={user.login} endpoint="repos" clickFunc={setRepos}>Repos</Button>
            <Button username={user.login} endpoint="starred" clickFunc={setStarred}>Starred</Button>
            <DisplayRepoInfos repos={repos} starred={starred} />
        </Container>
    )
}