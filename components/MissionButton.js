import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const MissionButton = ({ onPress, missionDate, missionTime, missionName, missionLocation }) => {
  const { buttonStyle, contentLeft, contentRight, timeAndDateText, missionNameText, missionLocationText } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <View style={contentLeft}>
        <Text style={timeAndDateText}>
          {missionDate}
        </Text>
      
        <Text style={timeAndDateText}>
          {missionTime}
        </Text>
      </View>

      <View style={contentRight}>
        <Text style={missionNameText}>
          {missionName}
        </Text>

        <Text style={missionLocationText}>
          {missionLocation}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  timeAndDateText: {
    color: '#FFFFFF',
    // letterSpacing: moderateScale(1.5),
    fontSize: moderateScale(20),
    paddingBottom: moderateScale(3),
    paddingTop: moderateScale(3),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },

  missionNameText: {
    fontSize: moderateScale(33),
    color: '#FFFFFF',
    // letterSpacing: moderateScale(1.5),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },

  missionLocationText: {
    fontSize: moderateScale(14),
    color: '#FFFFFF',
    // letterSpacing: moderateScale(1.5),
    paddingBottom: moderateScale(4),
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },

  contentLeft: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: '#008D12',
    borderRightWidth: 1,
  },

  contentRight: {
    alignItems: 'flex-start',
    flex: 2.5,
    justifyContent: 'center',
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
