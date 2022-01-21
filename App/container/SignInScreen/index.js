import React, { useState, useEffect } from "react";
import { Pressable, SafeAreaView, Text, View, TextInput, BackHandler } from "react-native";
import styles from "./styles";
import Header from "../../components/RigesterHeader";
import RegistartionCard from "../../components/RegistartionCard";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isEmpty } from "ramda";
import { SAVE_LOGIN } from "../../constants";
import { useDispatch } from "react-redux";

const EMAIL_PATTERN = new RegExp('^[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,3}$');
const PASSWORD_PATTERN = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#&])(?=.{8,16})");
// (?=.*[0-9])(?=.*[@$!%*#?&])
const SignInScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordButton, setPasswordButton] = useState(true);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", () => { return true; });
        };
    }, []);


    const onSignInPressed = () => {
        let isEmailValid = EMAIL_PATTERN.test(email);
        let isPasswordvalid = PASSWORD_PATTERN.test(password);
        setEmailError('');
        setPasswordError('');
        if (!isEmpty(email.trim()) && !isEmpty(password) && isEmailValid
            && isPasswordvalid) {
            dispatch({ type: SAVE_LOGIN })
            props.navigation.navigate('MainScreen');
            setPassword('');
        }
        else {
            if (isEmpty(email.trim())) {
                setEmailError("Please enter your email")
            } else if (!isEmailValid) {
                setEmailError("Please enter correct email")
            }
            if (isEmpty(password)) {
                setPasswordError("Please enter your password")
            } else if (!isPasswordvalid) {
                setPasswordError("Incorrect Password")
            }

        }
    }

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <Header
                title={"Sign in"} />
            <RegistartionCard>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.signinView}>
                    <View style={styles.textInputView}>
                        <TextInput
                            value={email}
                            placeholderTextColor="#7F7F7F"
                            style={styles.textInputStyle}
                            placeholder="Enter your email"
                            onChangeText={(value) => {
                                setEmail(value.trim());
                                setEmailError('')
                            }}
                            keyboardType="default"
                        />
                    </View>
                    {!isEmpty(emailError) && <Text style={styles.errorText}>{emailError}</Text>}
                    <View style={[styles.textInputView, styles.passwordView]}>
                        <TextInput
                            value={password}
                            placeholderTextColor="#7F7F7F"
                            style={[styles.textInputStyle, { width: "90%" }]}
                            placeholder="Password"
                            onChangeText={(value) => {
                                setPassword(value.trim());
                                setPasswordError('')
                            }}
                            maxLength={16}
                            keyboardType="default"
                            secureTextEntry={passwordButton}
                        />
                        <Pressable
                            onPress={() => setPasswordButton((prevValue) => !prevValue)}>
                            <Icons
                                name={passwordButton ? 'eye-off-outline' : 'eye-outline'}
                                color="#7F7F7F"
                                size={20}
                            />
                        </Pressable>
                    </View>
                    {!isEmpty(passwordError) && <Text style={styles.errorText}>{passwordError}</Text>}
                    <View style={{ marginTop: 30 }}>
                        <Pressable
                            onPress={onSignInPressed}
                            style={styles.signInButton}>
                            <Text style={styles.signInText}>Sign In</Text>
                        </Pressable>
                        <Text style={styles.signUpText}>Don't have an account? <Text
                            style={{ color: "#312F57" }}
                            onPress={() => props.navigation.navigate("InitialScreen")}>Sign Up</Text></Text>
                    </View>
                </KeyboardAwareScrollView>

            </RegistartionCard>
        </SafeAreaView>
    </React.Fragment>
};

export default SignInScreen;
