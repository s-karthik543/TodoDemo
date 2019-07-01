import React, { Component } from 'react';
import {
    View,
    FlatList,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

import { fetchAllTodos, updateTodo, deleteTodo } from './HomeAction';

class Home extends Component {

    static navigationOptions = {
        title: 'Home',
    }

    componentDidMount() {
        this.props.fetchAllTodos();
    }

    navigateToAddTodo = () => {
        this.props.navigation.navigate('AddTodo')
    }

    render() {
        const { todos } = this.props;

        return (
            <View style={styles.container}>
                {Array.isArray(todos) && todos.length > 0 &&
                    <FlatList
                        data={todos}
                        keyExtractor={(item) => `${item.user_id}`}
                        renderItem={({ item }) => <TodoItem data={item}
                            deleteTodo={this.props.deleteTodo}
                            updateTodoStatus={this.props.updateTodo} />} />}


                {(!Array.isArray(todos) || todos.length === 0) && <Text style={{ marginTop: 30, textAlign: 'center' }}>
                    No todos found!
</Text>}
                <TouchableOpacity onPress={this.navigateToAddTodo} style={styles.fabButton}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fabButton: {
        width: 56,
        height: 56,
        elevation: 2,
        position: 'absolute',
        right: 16,
        bottom: 20,
        borderRadius: 28,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})

const mapStateToProps = (state) => ({
    todos: state.todo.todos
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    fetchAllTodos,
    updateTodo,
    deleteTodo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)