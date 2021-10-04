import React from 'react';

/* Styles */
import styled from 'styled-components';
import { MdVolumeUp } from 'react-icons/md'


const Card = styled.div`
    background-color:   #aaa2a2;
    border-radius: 8px;
    margin: 16px;
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
    padding: 40px 40px 24px 40px;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    margin-bottom: 40px;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    color: #e4dcdc;
    padding-left: 16px;
`

const ScrollContainer = styled.div`
    min-width: 0;
    min-height: 0;
    overflow: scroll;
    flex: 1;
    margin-bottom: 24px;
`

const TagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 8px;
`

const Tag = styled.div`
    background-color: #857f7f;
    margin: 0 4px 8px 0;
    padding: 4px 8px;
    border-radius: 16px;
    font-size: 1.5rem;
`

const LighterCard = styled.div`
    background-color:#c7bebe;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 16px;
`

const Sentence = styled.div`
    background-color:#aaa2a2;
    margin: 4px;
    font-size: 1.25rem;
    padding: 8px;
    border-radius: 4px;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.div`
    background-color: ${({ color }: any) => color};
    border-radius: 4px;
    font-weight: bold;
    margin-top: 4px;
    padding: 12px;
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