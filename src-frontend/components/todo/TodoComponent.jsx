import React, { Component } from 'react'
import moment from 'moment'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import TodoDataService from '../../api/todo/TodoDataService.js'
import AuthenticationService from './AuthenticationService.js'




class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: ' ',
            dueDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)

    }

    render() {
        let description = this.state.description;
        let dueDate = this.state.dueDate;
        //another option: let {description, dueDate} = this.state
        return (
            <div>
                <h1> TODO </h1>
                <div className="container">
                    <Formik
                        initialValues={{ description, dueDate }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="dueDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>DueDate</label>
                                        <Field className="form-control" type="date" name="dueDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit"> Save </button>
                                </Form>


                            )
                        }
                    </Formik>
                </div>

            </div>

        );
    }


    componentDidMount() {

        if(this.state.id ===-1) { return }
        let username = AuthenticationService.getLoggedInUser();
        let id = this.state.id;
        TodoDataService.getTodo(username, id)
            .then(response => this.setState({
                description: response.data.description,
                dueDate: moment(response.data.dueDate).format('YYYY-MM-DD')

            }));


    }
    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUser();

        let todo = {
            id: this.state.id,
            description: values.description,
            dueDate: values.dueDate
        };

        if (this.state.id === -1) {

            TodoDataService.createTodo(username, todo).then(() => this.props.history.push('/todos'))
        }
        else {
            let id = this.state.id;
            TodoDataService.updateTodo(username, id, todo).then(() => this.props.history.push('/todos'))
        }
    }



    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'empty description is not a goal! ';
        } else if (values.description.length < 5) {
            errors.description = 'the description is too short! '
        }

        if (!moment(values.dueDate).isValid) {
            errors.dueDate = 'the dueDate invalid! ';
        }


        return errors
    }

}

export default TodoComponent;