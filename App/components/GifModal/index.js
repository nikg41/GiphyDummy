import React from "react";
import { Pressable, Text, View, Modal } from "react-native";
import styles from "./styles";
import { useDispatch } from "react-redux";
import { CLEAR_MODAL_DATA } from "../../constants";
import GifImage from '@lowkey/react-native-gif';
import Icon from 'react-native-vector-icons/Entypo';


const GifModal = (props) => {
    const dispatch = useDispatch();
    return <Modal
        visible={props.isVisible}
        transparent={true}>
        <View style={styles.modalBg}>
            <View style={styles.modalView}>
                <Pressable
                    style={{ alignSelf: "flex-end", paddingVertical: 5 }}
                    onPress={() => {
                        dispatch({ type: CLEAR_MODAL_DATA })
                    }}>
                    <Icon name="cross" size={35} color={"#A6A6A6"} />
                </Pressable>
                <GifImage
                    resizeMode='contain'
                    style={styles.image}
                    source={{ uri: props.modalData }}
                />
            </View>
        </View>
    </Modal>
}

export default GifModal;