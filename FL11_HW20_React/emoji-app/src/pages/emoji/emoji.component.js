import React from 'react';
import { API } from '../../constants/api.constants.js';
import { EmojiPreview } from './emoji-preview';
// import {EmojiInfo} from '../emoji-includes';

export class Emoji extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emoji: []
        }
    }
    componentDidMount(){
        fetch(`${API}`)
            .then(response => response.json())
            .then(data => {
                this.setState({emoji: data.emoji})
                console.log(data.emoji.char);
            })
    }
    

    render(){
        if(this.state.emoji.length === 0){
            return <p>Loading...</p>
        }
        return this.state.emoji.map(this.renderEmojiPreview)
    }
    renderEmojiPreview(emoji){
        return (
            <>
                <EmojiPreview
                    id={emoji.id}
                    emoji={emoji.emoji}
                    title={emoji.title}
                    stars={emoji.stars}
                    price={emoji.price}
                />
            </>
        )
    }
}
