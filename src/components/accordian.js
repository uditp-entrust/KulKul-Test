import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StyledText from 'react-native-styled-text';

export default class Accordian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      expanded: false,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          ref={this.accordian}
          style={styles.row}
          onPress={() => this.toggleExpand()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 70,
              backgroundColor: '#FFDBAC',
              borderRadius: 6,
              width: Dimensions.get('window').width - 32,
            }}>
            <Text
              style={{
                fontSize: 16,
                margin: 5,
                fontWeight: '600',
                width: (Dimensions.get('window').width - 32) * 0.85,
              }}>
              {this.props.title}
            </Text>
            <Icon
              name={
                this.state.expanded
                  ? 'keyboard-arrow-up'
                  : 'keyboard-arrow-down'
              }
              size={30}
              color="#B88F57"
            />
          </View>
        </TouchableOpacity>
        <View style={styles.parentHr} />
        {this.state.expanded && (
          <View style={{backgroundColor: '#FFF7F2'}}>
            {this.props.content.map((val, ky) => {
              return (
                <View key={ky}>
                  <View
                    style={{
                      // margin: 5,
                      flexDirection: 'row',
                      flex: 1,
                    }}>
                    <View style={{margin: 10}}>
                      <Image
                        style={{
                          height: 30,
                          width: 30,
                        }}
                        source={val.image}
                      />
                    </View>
                    <View style={{marginLeft: 10}}>
                      <StyledText
                        textStyles={textStyles}
                        style={{
                          fontSize: 16,
                          fontWeight: '600',
                          color: '#7B7B7B',
                          width: (Dimensions.get('window').width - 42) * 0.85,
                        }}>
                        {val.info}
                      </StyledText>
                    </View>
                  </View>
                  {ky !== 2 ? (
                    <View
                      style={{
                        borderBottomColor: '#F3EBE5',
                        borderBottomWidth: 1,
                        marginTop: 5
                      }}
                    />
                  ) : null}
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }

  toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded: !this.state.expanded});
  };
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    // paddingLeft: 25,
    // paddingRight: 18,
    // alignItems: 'center',
  },
  parentHr: {
    height: 1,
    width: '100%',
  },
  child: {
    padding: 16,
  },
});

const textStyles = StyleSheet.create({
  demo: {
    color: '#000000',
  },
});
