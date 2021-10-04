import React from 'react';

/* Styles */
import styled from 'styled-components';
import { MdVolumeUp } from 'react-icons/md'


const Card = styled.div`
    background-color:   #aaa2a2;
    border-radius: 0.5rem;
    margin: 1rem;
    width: 30%;
    min-width: 20rem;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const CardHeader = styled.div`
    background-color: #58708B;  /* TODO use different color for both of us */
    background-color: #BE8BA1;
    min-height: 3.5rem;
`

const CardBody = styled.div`
    padding: 2.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    overflow: hidden;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    margin-bottom: 2.5rem;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    color: #e4dcdc;
    padding-left: 1rem;
`

const ScrollContainer = styled.div`
    min-width: 0;
    min-height: 0;
    overflow: scroll;
    flex: 1;
    margin-bottom: 1.5rem;
`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;
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
    margin-bottom: 1rem;
`

const Sentence = styled.div`
    background-color:#aaa2a2;
    margin: 0.25rem;
    font-size: 1.25rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.div`
    background-color: ${({ color }: any) => color};
    border-radius: 0.25rem;
    font-weight: bold;
    margin-top: 0.25rem;
    padding: 0.75rem;
    width: 35%;
    text-align: center;
    font-size: 0.8rem;
`

export default function WordCard() {
    return <Card>
        <CardHeader />

        <CardBody>
            <Title>Petra's English word <Icon><MdVolumeUp /></Icon></Title>

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

            <ButtonContainer>
                <Button color="green">CORRECT</Button>
                <Button color="darkred">NOT CORRECT</Button>
            </ButtonContainer>
        </CardBody>
    </Card>

}