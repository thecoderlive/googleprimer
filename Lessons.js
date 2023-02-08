import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const lessonsItem = ({ item }) => (
<View style={styles.lessons_item}>
<Image
    style={styles.lesson_pic}
    source={{uri: item.lesson_pic}}
    />
<Text style={styles.about_lesson}>{item.about_lesson}</Text>
<Text style={styles.by_text}>{item.by_text}</Text>
<Image
    style={styles.lesson_type_icon}
    source={{uri: item.lesson_type_icon}}
   />
<Text style={styles.lesson_type}>{item.lesson_type}</Text>
</View>
  );

const Lessons = ({ item }) => (
<FlatList
    style={styles.lessons}
    data={item}
    renderItem={lessonsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default Lessons;

const styles = StyleSheet.create({
    'lesson_pic': {
        'width': '20vw',
        'height': '20vw',
        'marginTop': 5
    },
    'about_lesson': {
        'fontSize': 16,
        'fontWeight': '300',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'by_text': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'lesson_type_icon': {
        'width': '6vw',
        'height': '5vw',
        'margin': 5
    },
    'lesson_type': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});