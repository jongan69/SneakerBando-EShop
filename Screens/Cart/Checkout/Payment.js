import React, { useState } from "react"
import { View, Button } from "react-native"
import { 
    Container,
    Header,
    Content,
    ListItem,
    Text,
    Radio,
    Right,
    Left,
    Picker,
    Icon,
    Body,
    Title
} from 'native-base';

const methods = [
    { name: 'Cash on Delivery', value: 1 },
    { name: 'Bank Transfer', value: 2 },
    { name: 'Card Payment', value: 3 },
]

const paymentCards = [
    { name: 'Wallet', value: 1 },
    { name: 'Visa', value: 2},
    { name: 'MasterCard'},
    { name: 'Other', value: 4 }
]

const Payment = (props) => {

    const order = props.route.params

    const [selected, setSelected] = useState();
    const [card, setCard] = useState();

    return (
        <Container>
            <Header>
                <Body>
                    <Title>Choose your Payment Method</Title>
                </Body>
            </Header>
            <Content>
                {methods.map((item, index) => {
                    return (
                        <ListItem onPress={() => setSelected(item.value)}>
                            <Left>
                                <Text>{item.name}</Text>
                            </Left>
                            <Right>
                                <Radio selected={selected == item.value}/>
                            </Right>
                        </ListItem>
                    )
                })}
            </Content>
        </Container>
    )
}

export default Payment;