import React, {forwardRef} from 'react';
import {
  TextInput as RNTextInput,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import {COLORS} from '../utils/colors';
import {IS_IOS, hp, wp} from '../utils/layoutUtils';

const CustomTextInput = forwardRef(
  (
    {
      value,
      onChangeText,
      placeholder,
      placeholderTextColor,
      leftComponent,
      rightComponent,
      containerStyle,
      inputStyle,
      onlyAlphabets,
      onlyNumbers,
      noEmojis = true,
      hasError = false,
      errorText = '',
      keyboardType,
      onViewPress = () => {},
      ...props
    },
    ref,
  ) => {
    const validateAlphabets = inputText => {
      const regex = /^[a-zA-Z\s]+$/;
      return regex.test(inputText);
    };

    const handleTextChange = inputText => {
      let filteredText = inputText;

      // Only allow alphabets
      if (onlyAlphabets && (validateAlphabets(inputText) || inputText === '')) {
        onChangeText(inputText);
        return;
      }

      // Only allow numbers
      if (onlyNumbers) {
        filteredText = filteredText.replace(/[^0-9]/g, '');
        onChangeText(filteredText);
        return;
      }

      onChangeText(filteredText);
    };

    const combinedTextStyles = [
      {...styles.input, color: COLORS.BLACK},
      inputStyle,
    ];

    return (
      <>
        <Pressable
          style={[
            styles.container,
            containerStyle,
            hasError ? styles.errorStyle : {},
          ]}
          onPress={onViewPress}>
          {leftComponent && (
            <View style={styles.leftComponent}>{leftComponent}</View>
          )}
          <RNTextInput
            ref={ref}
            style={combinedTextStyles}
            value={value}
            onChangeText={handleTextChange}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            underlineColorAndroid={'transparent'}
            autoCorrect={false}
            autoCapitalize={'none'}
            textInputMode="none"
            keyboardType={keyboardType}
            selectionColor={IS_IOS ? undefined : COLORS.BLACK}
            cursorColor={COLORS.BLUE}
            {...props}
          />
          {rightComponent && (
            <View style={styles.rightComponent}>{rightComponent}</View>
          )}
          {props?.maxLength === 500 && (
            <View style={{right: 4, bottom: 4, position: 'absolute'}}>
              <Text style={{fontSize: 12}}>(400-500 characters)</Text>
            </View>
          )}
        </Pressable>
        {hasError && errorText.length ? (
          <Text style={styles.errorText}>{errorText}</Text>
        ) : null}
      </>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp(4),
    borderRadius: wp(5),
    marginBottom: hp(20),
    paddingHorizontal: wp(10),
    backgroundColor: COLORS.WHITE,
  },
  errorStyle: {
    borderColor: 'red',
    marginBottom: hp(0),
  },
  errorText: {
    marginBottom: hp(20),
    color: 'red',
    fontSize: 14,
  },
  input: {
    flex: 1,
    height: '100%',
    backgroundColor: COLORS.WHITE,
  },
  leftComponent: {
    marginRight: 10,
  },
  rightComponent: {
    marginLeft: 10,
  },
});

export default CustomTextInput;
