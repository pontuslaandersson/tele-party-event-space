import React from 'react';
import {
    ActionButtonRow,
    AudienceButton,
    Background,
    PerformerButton,
    WelcomeMessageDiv,
    WelcomeMessageHeader
} from "./Styles";
import LandingBG from '../../Assets/ruslan-keba-_WHjtsrYYXQ-unsplash.jpg'
const LandingPage = () => {
    return (
        <Background src={'https://images.unsplash.com/photo-1552297777-dacae7d2b894?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'}>
            <WelcomeMessageDiv>
                <WelcomeMessageHeader>WELCOME, HOW WOULD YOU LIKE TO JOIN US?</WelcomeMessageHeader>
                <ActionButtonRow>
                    <PerformerButton>PERFORMER</PerformerButton><AudienceButton>AUDIENCE</AudienceButton>
                </ActionButtonRow>
            </WelcomeMessageDiv>
        </Background>
    )
};

export default LandingPage
