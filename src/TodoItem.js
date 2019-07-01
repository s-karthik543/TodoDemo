import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Picker,
    StyleSheet
} from 'react-native';

const STATUS = ['PENDING', 'COMPLETE'];

export default class TodoItem extends Component {

    render() {
        const { data } = this.props;

        const statusPicker = STATUS.map(function (value, index) {
            return (
                <Picker.Item label={value} key={index} value={value} />
            )
        });

        return (
            <View style={style.container}>

                <View >
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 16, marginRight: 10 }}>
                            Name:
                    </Text>
                        <Text style={{ fontSize: 16, color: 'black' }}>
                            {data.name}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, marginRight: 10 }}>
                            Description :
                    </Text>
                        <Text style={{ fontSize: 14, color: 'black' }}>
                            {data.description}
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Text style={{ fontSize: 16, marginRight: 10, }}>
                            Status:
                    </Text>

                        <View style={{ backgroundColor: '#ffffff', marginRight: 20, }}>
                            <Picker
                                selectedValue={data.status}
                                onValueChange={(value) => this.props.updateTodoStatus(value, data.user_id)}
                                style={[{ width: 150, height: 40 }]}>
                                {statusPicker}
                            </Picker>
                        </View>
                    </View>
                </View>

                <Text style={{ marginLeft: 10 }} onPress={() => this.props.deleteTodo(data.user_id)}>
                    DELETE
                </Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
        backgroundColor: '#ffffff',
        elevation: 2,
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center'
    }
})