import React from 'react';

/* Styles */
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5'
import { MdOutlineAdd } from 'react-icons/md'
import { BsSuitHeart } from 'react-icons/bs'

const Card = styled.div`
    border: 1px solid #b1bcc7;
    border-radius: 8px;
    margin: 16px;
    width: 30vw;
    min-width: 20rem;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const CardHeader = styled.div`
    background-color: #ecebf0;
    border-bottom: 1px solid #b1bcc7;
    padding: 0 16px;
    min-height: 3.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
`

const Icon = styled.div`
    display: flex;
    align-items: center;
    padding-left: 16px;
    :hover{
        cursor: pointer;
    }
`

const HeartIcon = styled(Icon)`
    margin-bottom: 12px;
`

const CardBody = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
`

const Row = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const LighterCard = styled.div`
    display: flex;
    flex-direction: column;
    background: #F7F6FC;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 16px;
    font-weight: 300;
`

const String = styled.input`
    display: flex;
    flex: 1;
    font-size: 1rem;
    padding: 8px 12px;
    margin-bottom: 12px;
    border: 1px #c7c7c7 solid;
    border-radius: 20px;
    color: grey;
    ::placeholder{
        color: #c7c7c7;
    }
    :focus{
        outline: 1px #56abe3 solid;
    }
`

const AddNewRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 0.9rem;
`

const CircleButton = styled.button`
	display:flex;
    justify-content: center;
    align-items: center;
    height: 24px;
    width: 24px;
	border-radius:12px;
    margin-right: 8px;
	cursor:pointer;
	color:#ffffff;
	font-size:1rem;
	text-decoration:none;
	text-shadow:0px 1px 0px #4751ae;
    box-shadow:inset 0px 1px 0px 0px #bedffb;
	background-color:#56abe3;
	border: none;
    :hover {
	background:linear-gradient(to bottom, #527dcc 5%, #56abe3 100%);
	background-color:#527dcc;
    }
    :active {
        position:relative;
        top:1px;
    }
`

const Select = styled.select`
    display: flex;
    flex: 1;
    font-size: 1rem;
    padding: 8px 12px;
    margin-bottom: 12px;
    border: 1px #c7c7c7 solid;
    border-radius: 20px;
    color: grey;
    ::placeholder{
        color: #c7c7c7;
    }
    :focus{
        outline: 1px #56abe3 solid;
    }
`

const Textarea = styled.textarea`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size: 1rem;
    padding: 8px 12px;
    margin-bottom: 12px;
    border: 1px #c7c7c7 solid;
    border-radius: 20px;
    color: grey;
    resize: none;
    min-height: 5rem;
    ::placeholder{
        color: #c7c7c7;
    }
    :focus{
        outline: 1px #56abe3 solid;
    }
`

const Button = styled.div`
    display: inline-block;
    width: fit-content;
    cursor: pointer;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    padding: 6px 24px;
    margin-top: 16px;
    text-decoration: none;
    border-radius: 15px;
    border: none;
    background-color: #51cb33;
    :hover {
        background: linear-gradient(to bottom, #a5cc52 5%, #b8e356 100%);
        background-color:#a5cc52;
    }
    :active {
        position:relative;
        top:1px;
    }
`

export default function EditWord() {

    return <Card>
        <CardHeader>Add new word <Icon><IoClose /></Icon></CardHeader>
        <CardBody>

            <Form>
                <Row>
                    <String placeholder="English word or expression" />
                    <HeartIcon>
                        <BsSuitHeart size={24} />
                    </HeartIcon>
                </Row>

                <LighterCard>
                    <String placeholder="Hungarian meaning" />
                    <AddNewRow>
                        <CircleButton><MdOutlineAdd size={12} /></CircleButton>
                        Add one more Hungarian meaning
                    </AddNewRow>
                </LighterCard>

                <LighterCard>
                    <String placeholder="Example sentence" />
                    <AddNewRow>
                        <CircleButton><MdOutlineAdd size={12} /></CircleButton>
                        Add one more example sentence
                    </AddNewRow>
                </LighterCard>

                <Select placeholder="Type">
                    <option>Word</option>
                    <option>Expression</option>
                </Select>

                <Textarea placeholder="You can write your notes here"></Textarea>

                <Row><Button>Save</Button></Row>
            </Form>

        </CardBody>
    </Card>
}