import React from 'react';
import { View } from 'react-native';
import styles from './style';

import { scene6JSON } from '../constsImportFiles';
import { textScene6 } from '../legendTextFile';

export default function PageOne({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene6JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene6} />
                
                <ButtonNavigation  proxRoute="PageSeven" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}