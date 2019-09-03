import React from 'react';
import styles from './pages.module.scss';
import { EmojiInfo } from './emoji-includes'; 
import { Emoji } from './emoji';


export class MainEmojiPage extends React.Component{
    render(){
        return(
            <>
                <div className={styles.main}>
                    <div className={styles.container}>
                        <EmojiInfo />
                        
                    </div>
                </div>
            </>
        );
    }
}