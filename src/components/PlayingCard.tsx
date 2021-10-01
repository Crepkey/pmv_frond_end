import React from 'react';

/* Styles */
import styled from 'styled-components';

const Card = styled.div`
    background-color:   #aaa2a2;
    border-radius: 0.25rem;
    width: 30%; /* TODO fit content? */
    margin: 1rem;
`

const CardHeader = styled.div`
    background-color: #58708B;  /* TODO use different color for both of us */
    background-color: #BE8BA1;
    border-radius: 0.25rem 0.25rem 0 0;
    height: 3rem;
`

const CardBody = styled.div`
    padding: 2rem;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    padding: 0.5rem;
    margin-bottom: 1.5rem;
`

const ScrollContainer = styled.div`
    overflow: scroll;
`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
`

const Tag = styled.div`
    background-color: #857f7f;
    margin: 0 0.25rem 0.5rem 0;
    padding: 0.25rem 1rem;
    border-radius: 1rem;
    font-size: 1.5rem;
`

const LighterCard = styled.div`
    background-color:#c7bebe;
    border-radius: 0.25rem;
    padding: 0.5rem;
    margin: 1rem 0;
`

const Sentence = styled.div`
    background-color:#aaa2a2;
    margin: 0.25rem;
    font-size: 1.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
`

export default function PlayingCard() {
    return <Card>
        <CardHeader />

        <CardBody>
            <Title>Petra's English word <div>H</div></Title>

            <ScrollContainer>
                <TagContainer>
                    <Tag>első jelentés</Tag>
                    <Tag>második jelentés</Tag>
                    <Tag>......</Tag>
                </TagContainer>
                <LighterCard>
                    <Sentence>Example sentence with very very very very very very very very very long text</Sentence>
                    <Sentence>Example sentence 2</Sentence>
                    <Sentence>Example sentence 3</Sentence>
                </LighterCard>
                <LighterCard>Notes notes notes ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LighterCard>
            </ScrollContainer>

            Correct Not correct
        </CardBody>
    </Card>
}