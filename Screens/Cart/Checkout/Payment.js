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
    { name: 'Cash on Delivery (USD)', value: 1 },
    { name: 'Bank Transfer (USD)', value: 2 },
    { name: 'Card Payment (USD)', value: 3 },
    { name: 'Cryptocurrency: BTC/ETH/SHIB/HOES', value: 3 },
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
                {selected == 3 ? (
                    <Picker
                    mode='dropdown'
                    iosIcon={<Icon name={"arrow-down"}/>}
                    headerStyle={{ bacckgroundColor: 'orange'}}
                    headerBackButtonTextStyle={{ color: '#fff' }}
                    headerTitleStyle={{ color: '#fff' }}
                    selectedValue={card}
                    onValueChange={(x)=> setCard(x)}
                    >
                        {paymentCards.map((c, index) => {
                            return <Picker.Item label={c.name} value={c.name}/>
                        })}
                    </Picker>
                ) : null }
                <View style={{ marginTop: 60, alignSelf: 'center'}}>
                        <Button title={"Confirm"} onPress={() => props.naviigation.navigate("Confirm", {order}) }/>
                </View>
            </Content>
        </Container>
    )
}

export default Payment;