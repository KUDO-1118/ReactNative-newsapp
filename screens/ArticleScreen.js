import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

export const ArticleScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView
      // originWhitelist={['*']}
      source={{ uri: article.url }}
    />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})
