import { StyleSheet, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';
import { useDispatch } from "react-redux";
import { ClipButton } from "../components/ClipButton";
import { addClip } from "../store/userSlice";

export const ArticleScreen = ({ route }) => {
  const { article } = route.params;
  const dispatch = useDispatch();

  const onPressClip = () => {
    dispatch(addClip(article))
  }
  return (
    <SafeAreaView style={styles.container}>
      <ClipButton onPress={onPressClip} enabled={false} />
      <WebView
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
