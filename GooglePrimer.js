import React from 'react'
import { Image, Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import Lessons from './Lessons'

const GooglePrimer = () => (
<ScrollView style={styles.google_primer} showsVerticalScrollIndicator={false}>
<Image
    style={styles.primer_icon}
    source={{uri: item.primer_icon}}
   />
<Text style={styles.skill_title}>{item.skill_title}</Text>
<Text style={styles.suggestion}>{item.suggestion}</Text>
<Text style={styles.featured_title}>{item.featured_title}</Text>
<Lessons item={item.lessons}/>
</ScrollView>
)

export default GooglePrimer;

const styles = StyleSheet.create({
    'primer_icon': {
        'width': '8vw',
        'height': '8vw',
        'margin': 5,
        'alignSelf': 'center'
    },
    'skill_title': {
        'fontSize': 14,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center',
        'textAlign': 'center'
    },
    'suggestion': {
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'textAlign': 'center'
    },
    'featured_title': {
        'fontSize': 13,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});