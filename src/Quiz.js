// eslint-disable-next-line
import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

import { Button } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';

let quizData = require('./quiz_data.json');

class ButtonExampleButton extends React.Component {
    render() {
        return (
            <div> 
                <Button>Click Here</Button>
            </div>
        )
    }
}


const MenuExampleHover = () => (
  <Menu compact>
    <Menu.Item as='a'>Link 1</Menu.Item>
    <Menu.Item link>Link 2</Menu.Item>
  </Menu>
)

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {quiz_position: 1}
    }

    render() {

        const isQuizEnd = (this.state.quiz_position - 1) - quizData.quiz_questions.length;

        return (
            <div>
                <MenuExampleHover />
                <ButtonExampleButton />
                <QuizEnd />
                <QuizQuestion quiz_questions={quizData.quiz_questions[this.state.quiz_position - 1]} />
            </div>
        );
    }
}

export default Quiz;