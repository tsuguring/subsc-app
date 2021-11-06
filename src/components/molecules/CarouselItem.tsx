import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "../atoms/Button";
import { COLOR } from "../../constants/theme";
import { width } from "../../lib/window";

const padding = 20;
const edgeNumber = 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding,
    backgroundColor: COLOR.MAIN,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
    lineHeight: 40,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: width - padding * edgeNumber,
    paddingVertical: 10,
  },
  imageContainer: {
    flex: 2,
  },
  contentContainer: {
    flex: 3,
    paddingTop: 30,
    justifyContent: "space-between",
    paddingBottom: 20,
  },
});

export default function CarouselItem({
  item,
  index,
  onPress,
}: {
  item: { text: string };
  index: number;
  onPress: any;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
          {index === 2 ? (
            <Button onPress={onPress} label="始める!" />
          ) : (
            <Text>スワイプ</Text>
          )}
        </View>
      </View>
    </View>
  );
}
