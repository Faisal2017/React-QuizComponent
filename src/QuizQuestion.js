// eslint-disable-next-line
import React, {Component} from 'react';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends React.Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.quiz_questions.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <QuizQuestionButton button_text={this.props.quiz_questions.answer_options[0]}/>
                    </ul>
                </section>
            </main>
        )
    }
}

export default QuizQuestion;