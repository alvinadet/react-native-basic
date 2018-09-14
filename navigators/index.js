import React from 'react';
import { addNavigationHelpers, createStackNavigator } from 'react-navigation';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import { Home, Add } from '../screen';

export const AppNavigator = createStackNavigator({
    Main: { screen: Home },
}, {
        initialRouteName: 'Home',
    });

const AppWithNavigationState = ({ dispatch, nav }) => (
    <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
    />
);

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);