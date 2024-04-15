/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';


const Project9 = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operatorValue, setOperatorValue] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [operation, setOperation] = useState('');

  const [isMoonIcon, setIsMoonIcon] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  const handleIconPress = () => {
    setIsMoonIcon(!isMoonIcon);
    setBackgroundColor(isMoonIcon ? '#102C57' : '#fff');
  };

  const handleButtonPress = buttonValue => {
    switch (buttonValue) {
      case 'C':
        handleClear();
        break;
      case 'Del':
        setDisplayValue(prevValue => {
          if (prevValue.length > 1) {
            return prevValue.slice(0, -1);
          } else {
            return '0';
          }
        });
        break;
      case '.':
      case '.':
        setDisplayValue(prevValue => prevValue + '.');
        break;

      case '=':
        handleEqual();
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        handleOperatorInput(buttonValue);
        break;
      default:
        if (displayValue === '0' && buttonValue !== '0') {
          setDisplayValue(buttonValue);
        } else {
          setDisplayValue(prevValue => prevValue + '' + buttonValue);
        }
        break;
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setOperatorValue(null);
    setFirstValue('');
    setOperation('');
  };

  const handleOperatorInput = operator => {
    setFirstValue(displayValue);
    setOperatorValue(operator);
    setOperation(displayValue + ' ' + operator);
    setDisplayValue('0');
  };

  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    let result;
    switch (operatorValue) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
      default:
        result = num2;
    }

    setDisplayValue(result.toString());
    setFirstValue('');
    setOperatorValue(null);
    setOperation(operation + ' ' + displayValue + '=');
  };

  const screenWidth = Dimensions.get('window').width;
  const buttonWidth = screenWidth * 0.25;
  const buttonsLeft = [
    ['C', 'Del'],
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.'],
  ];

  const buttonsRight = ['/', '*', '-', '+', '='];

  return (
    <View style={{...styles.container, backgroundColor}}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={{...styles.iconContainer, backgroundColor: '#fff'}}
onPress={handleIconPress}>
          <Icon
            name={isMoonIcon ? 'moon' : 'sunny'}
            size={30}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.displayContainer}>
          <Text
            style={{...styles.operation, color: isMoonIcon ? '#000' : '#fff'}}>
            {operation}
          </Text>
          <Text
            style={{...styles.display, color: isMoonIcon ? '#000' : '#fff'}}>
            {displayValue}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.leftColumn}>
          {buttonsLeft.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.buttonRow}>
              {row.map((button, buttonIndex) => (
                <TouchableOpacity
                  key={buttonIndex}
                  style={{
                    ...styles.button,
                    width:
                      buttonIndex === 0 && row.length === 2
                        ? buttonWidth * 2 + 10
                        : buttonWidth,
                    backgroundColor:
                      button === 'C' || button === 'Del'
                        ? isMoonIcon
                          ? '#DDDDDD'
                          : '#414853'
                        : '',
                  }}
                  onPress={() => handleButtonPress(button)}>
                  <Text
                    style={{
                      ...styles.buttonText,
                      color: isMoonIcon ? '#000' : '#fff',
                    }}>
                    {button}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.rightColumn}>
          {buttonsRight.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={{...styles.button, width: buttonWidth, flex: 1}}
              onPress={() => handleButtonPress(button)}>
              <Text style={{color: '#fff', fontSize: 24}}>{button}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  iconContainer: {
    marginTop: 20,
    marginLeft: 20,
    borderRadius: 90,
    justifyContent: 'center',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  icon: {
    borderColor: 'black',
    padding: 10,
  },
  displayContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    padding: 20,
  },
  display: {
    marginTop: 20,
    fontSize: 30,
  },
  operation: {
    fontSize: 20,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: 'row',
  },
  leftColumn: {
    flex: 3,
  },
rightColumn: {
    flex: 1,
    backgroundColor: '#1679AB',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default Project9;