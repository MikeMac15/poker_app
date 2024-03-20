import { Link, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { UserTheme } from './theme';



export default function Index() {

    

  return (
    

        <View style={baseStyles.container}>
            <Stack.Screen
            options={{
                headerShown: false
            }}/>
            <Text>Welcome To Dealer's Choice Poker!</Text>
            <Link href={'/play/solo'}>Play against Computers</Link>
            <Link href={'settings'}>Settings</Link>
        </View>

    
  );
}

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: UserTheme.colors.background,
    alignItems: 'center',
    marginTop: 100,
    // justifyContent: 'center',
  },
});
