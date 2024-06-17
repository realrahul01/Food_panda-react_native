import { StyleSheet, Text, View } from "react-native";
import AppNavigation from "./StackNavigation/AppNavigation";
import { Provider } from "react-redux";
import { store } from "./store/app";



const App=()=>{
    return (

        <Provider store={store}> 
            <View style={styles.container}>
                    <AppNavigation/>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})

export default App;