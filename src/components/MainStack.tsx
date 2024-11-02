import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from "./HomeScreen";

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);