import React, { useState, useEffect } from "react";
import { Pressable, SafeAreaView, Text, View, TextInput, BackHandler } from "react-native";
import styles from "./styles";
import Header from "../../components/RigesterHeader";
import RegistartionCard from "../../components/RegistartionCard";
import AndroidStatusBar from "../../components/AndroidStatusBar";
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { isEmpty } from "ramda";
import { SAVE_EMAIL } from "../../constants";
import { useDispatch } from 'react-redux'

const EMAIL_PATTERN = new RegExp('^[a-z0-9A-Z]+@[a-z]+\.[a-z]{2,3}$');
const PASSWORD_PATTERN = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#&])(?=.{8,16})");
// (?=.*[0-9])(?=.*[@$!%*#?&])
const RegisterScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordButton, setPasswordButton] = useState(true);
    const [confirmPasswordButton, setConfirmPasswordButton] = useState(true);
    const [termsButton, setTermsButton] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('')


    const dispatch = useDispatch();

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", () => { return true; });
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", () => { return true; });
        };
    }, []);

    const onSignUpPressed = () => {
        let isEmailValid = EMAIL_PATTERN.test(email);
        let isPasswordvalid = PASSWORD_PATTERN.test(password);

        if (!isEmpty(email.trim()) && !isEmpty(password) && isEmailValid
            && password === confirmPassword && termsButton && isPasswordvalid) {
            dispatch({
                type: SAVE_EMAIL, payload: {
                    email: email
                }
            })
            props.navigation.navigate("OtpScreen")
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
                setPasswordError("Password must contain 1 Capital Letter, 1 digit and 1 special character @#& and password length should be 8 to 16")
            }
            if (!isEmpty(password) && password !== confirmPassword) {
                setConfirmPasswordError("Confirm Your Password")
            }

        }
    }

    return <React.Fragment>
        <SafeAreaView style={styles.safeViewTop} />
        <SafeAreaView style={styles.container}>
            <AndroidStatusBar backgroundColor={"#312F57"} />
            <Header
                title={"Sign up"} />
            <RegistartionCard>
                <KeyboardAwareScrollView
                    showsVerticalScrollIndicator={false}
                    style={styles.signupView}>
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
                    {isEmpty(passwordError) && <Text style={styles.passwordText}>{"Password must contain 1 Capital Letter, 1 digit and 1 special character @#& and password length should be 8 to 16"}</Text>}
                    <View style={[styles.textInputView, styles.passwordView]}>
                        <TextInput
                            value={confirmPassword}
                            placeholderTextColor="#7F7F7F"
                            style={[styles.textInputStyle, { width: "90%" }]}
                            placeholder="Confirm Password"
                            onChangeText={(value) => {
                                setConfirmPassword(value.trim());
                                setConfirmPasswordError('')
                            }}
                            maxLength={16}
                            keyboardType="default"
                            secureTextEntry={confirmPasswordButton}
                        />
                        <Pressable
                            onPress={() => setConfirmPasswordButton((prevValue) => !prevValue)}>
                            <Icons
                                name={confirmPasswordButton ? 'eye-off-outline' : 'eye-outline'}
                                color="#7F7F7F"
                                size={20}
                            />
                        </Pressable>
                    </View>
                    {!isEmpty(confirmPasswordError) && <Text style={styles.errorText}>{confirmPasswordError}</Text>}

                    <View style={styles.termsView}>
                        <Pressable
                            onPress={() => setTermsButton((prevValue) => !prevValue)}>
                            <Icons
                                name={termsButton ? 'checkbox-marked' : 'checkbox-blank-outline'}
                                color="#312F57"
                                size={22}
                            />
                        </Pressable>
                        <Text style={styles.termsText}>I agree to our <Text style={{ color: "#312F57" }}>Terms and Conditions</Text> Agreement</Text>
                    </View>

                    <Pressable
                        onPress={onSignUpPressed}
                        style={styles.signUpButton}>
                        <Text style={styles.signUpText}>Sign Up</Text>
                    </Pressable>
                    <Text style={styles.signInText}>Already have an account? <Text
                        style={{ color: "#312F57" }}
                        onPress={() => props.navigation.navigate("SignInScreen")}>Sign In</Text></Text>
                </KeyboardAwareScrollView>

            </RegistartionCard>
        </SafeAreaView>
    </React.Fragment>
};

export default RegisterScreen;
