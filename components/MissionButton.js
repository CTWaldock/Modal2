import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MissionButton = ({ onPress, missionDate, missionTime, missionName, missionLocation }) => {
  const { buttonStyle, contentLeft, contentRight, buttonText } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={contentLeft}>
        <Text style={buttonText}>
          {missionDate}
        </Text>
      
        <Text style={buttonText}>
          {missionTime}
        </Text>
      </View>

      <View style={contentRight}>
        <Text style={buttonText}>
          {missionName}
        </Text>

        <Text style={buttonText}>
          {missionLocation}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  buttonText: {
    color: '#FFFFFF',
    fontSize: 28,
    // fontWeight: 400,
    // letterSpacing: -1.5,
    lineHeight: 60,
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10
  },

  contentLeft: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    borderColor: '#888',
    borderRightWidth: 1,
  },

  contentRight: {
    alignItems: 'flex-start',
    flex: 2,
    justifyContent: 'space-around',
    paddingLeft: 10,
  },

  buttonStyle: {
    flexDirection: 'row',
    height: moderateScale(70),
    alignSelf: 'stretch',
    backgroundColor: '#2DCD4F',
    borderRadius: 6,
    shadowColor: '#888',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    marginLeft: 5,
    marginRight: 5
  }
};

export default MissionButton;
