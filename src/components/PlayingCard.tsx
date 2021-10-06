import React from 'react';

/* Styles */
import styled from 'styled-components';
import { colors } from './colors';
import { MdVolumeUp } from 'react-icons/md';
import { GiSwordwoman } from 'react-icons/gi';


const Card = styled.div`
    border: 1px solid ${colors.border};
    border-radius: 8px;
    margin: 16px;
    width: 32%;
    min-width: 20rem;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const CardHeader = styled.div`
    display: flex;
    align-items: center;
    font-weight: 450;
    background-image: linear-gradient(to top,#d8d7dd,#dbdee7,#e2e5eb);
    border-bottom: 1px solid #b1bcc7;
    padding: 0 16px 0 16px;
    min-height: 3rem;
`

const CardBody = styled.div`
    padding: 32px;
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
    margin-bottom: 32px;
    font-weight: 550;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    color: #c7c7c7;
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
    background: #ecebf0;
    margin: 0 16px 16px 0;
    padding: 4px 16px;
    border-radius: 30px;
    font-size: 1.25rem;
    font-weight: 400;
`

const LighterCard = styled.div`
    background: #F7F6FC;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;
    font-weight: 300;
`

const Sentence = styled.div`
    background: white;
    margin-bottom: 8px;
    font-size: 1.15rem;
    padding: 8px;
    border-radius: 4px;
    font-weight: 300;
    border-bottom: 1px #c7c7c7 solid;
`

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Button = styled.div`
	display:inline-block;
	cursor:pointer;
	color: ${colors.buttonFont};
	font-size:1rem;
	font-weight: bold;
	padding:6px 24px;
	text-decoration:none;
	border-radius:16px;
	border: none;
	background-color: ${colors.acceptButtonBackground};
    :hover {
	background:linear-gradient(to bottom, ${colors.acceptButtonGradientLight} 5%, ${colors.acceptButtonGradientDark} 100%);
	background-color: ${colors.acceptButtonGradientLight};
    }
    :active {
        position:relative;
        top:1px;
    }
`

const RejectButton = styled.div`
	display:inline-block;
	cursor:pointer;
	color: ${colors.buttonFont};
	font-size:1rem;
	font-weight: bold;
	padding:6px 24px;
	text-decoration:none;
	border-radius:16px;
	border: none;
	background-color: ${colors.rejectButtonBackground};
    :hover {
	background:linear-gradient(to bottom, ${colors.rejectButtonGradientLight} 5%, ${colors.rejectButtonGradientDark} 100%);
    }
    :active {
        position:relative;
        top:1px;
    }
`

export default function WordCard() {
    return (
        <Card>
            <CardHeader>
                <GiSwordwoman size={28} style={{ border: '2px gray solid', borderRadius: 100, background: 'white', marginRight: '16px' }} />
                This word belongs to Petra
            </CardHeader>

            <CardBody>
                <Title>Petra's English word <Icon><MdVolumeUp /></Icon></Title>

                <ScrollContainer>
                    <TagContainer>
                        <Tag>első jelentés</Tag>
                        <Tag>második jelentés</Tag>
                        <Tag>harmadik jelentés</Tag>
                    </TagContainer>
                    <LighterCard>
                        <Sentence>Example sentence with very very very very very very very very very long text</Sentence>
                        <Sentence>Example sentence 2</Sentence>
                        <Sentence>Example sentence 3</Sentence>
                    </LighterCard>
                    <LighterCard>Notes notes notes ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</LighterCard>

                </ScrollContainer>

                <ButtonContainer>
                    <Button>CORRECT</Button>
                    <RejectButton>NOT CORRECT</RejectButton> {/*  TODO red button */}
                </ButtonContainer>
            </CardBody>
        </Card>
    )

}