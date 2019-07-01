import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Picker,
    TextInput,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from './HomeAction';

const STATUS = ['PENDING', 'COMPLETE'];

class AddTodo extends Component {

    static navigationOptions = {
        title: 'Add Todo',
    }

    state = {
        name: '',
        description: '',
        status: STATUS[0],
        date: ''
    }

    handleAddTodoClick = () => {
        const { name, description, status, date } = this.state;
        if (!name || !description || !status) {
            ToastAndroid.show('Please provide all the details', ToastAndroid.SHORT);
        } else {
            this.props.addTodo(name, description, status, new Date().getTime() / 1000)
            this.props.navigation.goBack();
        }
    }

    render() {
        const { name, description, status, date } = this.state;
        const statusPicker = STATUS.map(function (value, index) {
            return (
                <Picker.Item label={value} key={index} value={value} />
            )
        });
        return (
            <View style={styles.container}>

                <TextInput
                    value={name}
                    placeholder='Name'
                    underlineColorAndroid='black'
                    onChangeText={(name) => this.setState({ name })} />


                <TextInput
                    value={description}
                    placeholder='Descritpion'
                    underlineColorAndroid='black'
                    onChangeText={(description) => this.setState({ description })} />

                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={{ fontSize: 16, marginRight: 10, }}>
                        Status:
                    </Text>

                    <View style={{ backgroundColor: '#ffffff', marginRight: 20, }}>
                        <Picker
                            selectedValue={this.state.status}
                            onValueChange={(value) => this.setState({ status: value })}
                            style={[{ width: 150, height: 40 }]}>
                            {statusPicker}
                        </Picker>
                    </View>
                </View>

                <TouchableOpacity onPress={this.handleAddTodoClick} style={styles.buttonSave}>
                    <Text style={{ fontSize: 16, color: '#fff' }}>
                        SAVE
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginHorizontal: 40
    },
    buttonSave: {
        borderRadius: 5,
        marginTop: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    }
})

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({ addTodo }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)