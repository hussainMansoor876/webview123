import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { WebView } from 'react-native-webview';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView source={{ uri: 'https://neonto.cloud/preview/8x499d7/' }}
          userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36"
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={true}
        />
      </View>
    )
  }
}

export default App;
