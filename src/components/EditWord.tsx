import React from 'react';

/* Styles */
import styled from 'styled-components';
import { IoClose, IoAddCircleOutline } from 'react-icons/io5'

const Card = styled.div`
    background-color:   #aaa2a2;
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
    background-color: #857f7f;
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
    color: #e4dcdc;
    padding-left: 16px;
`


const CardBody = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-width: 0;
    min-height: 0;
    border: solid 1px black;
`

const LighterCard = styled.div`
    background-color:#c7bebe;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 16px;
`

const String = styled.input`
    ::placeholder{
        color: red;
    }
    margin-bottom: 12px;
`

const AddNewRow = styled.div`
    display: flex;
    justify-content: flex-start;
`


export default function EditWord() {

    return <Card>
        <CardHeader>Add new word <Icon><IoClose /></Icon></CardHeader>
        <CardBody>

            <String placeholder="English word or expression" />

            <LighterCard>
                <String placeholder="Hungarian meaning" />
                <AddNewRow> <IoAddCircleOutline /> Add one more Hungarian meaning</AddNewRow>
            </LighterCard>
        </CardBody>
    </Card>
}