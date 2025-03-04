import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../Card";
import Title from "../Title";

type PostProps = {
  description: string;
  title: string;
  time: string;

  image?: string;
};

const Post = ({ description, time, title, image }: PostProps) => (
  <Card>
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <Title>{title}</Title>
      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      ) : null}
      <Text>{description}</Text>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  time: {
    color: "grey",
    fontSize: 11,
  },
});

export default Post;
