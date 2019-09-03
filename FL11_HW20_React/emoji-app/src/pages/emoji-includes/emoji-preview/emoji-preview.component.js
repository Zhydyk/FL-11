import React from 'react';
import PropTypes from 'prop-types';
import styles from './emoji-preview.module.scss';
import { EmojiElement } from './emoji-element';
import { PrimaryButton } from '../../components'

export function EmojiPreview(props) {
    if(props.emoji.length <= 3){
    return(<div className={styles.emojiContainer}> 
        {props.emoji.map((element,index)=> { 
            return (<EmojiElement 
            key={element.codes}
            index={index}
            char={element.char}
            />)
        })}
          </div>
         ); 
    }else{
        return <div></div>
    }
// } 
    // return (
    //     <>
    //         <div>
    //             <ul>
    //                 <li>{this.props.title}</li> 
    //                 <li>{this.props.stars}</li>
    //                 <li>{this.props.char}</li>                       
    //             </ul>
    //         </div>
    //         <PrimaryButton />
    //     </>
    // )
    
}


EmojiPreview.propTypes = {
    id:PropTypes.number.isRequired,
    emoji: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired
}