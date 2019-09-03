import React from 'react';
import styles from './emoji-includes.module.scss';
import { PrimaryButton } from '../components';
export class EmojiInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            this.setState({
                data: this.props.data
            })
        }
        return true;
    }

    render() {
        if (this.state.data) {
            return (
                <header className={styles.header} >
                    <h1> New {this.state.data.props.title} </h1>
                    <h3>Includes:</h3>
                    <div>
                        {this.state.data.props.stickers.map((element) => {
                                return element.char;
                            })
                        }
                    </div>
                    <div className={styles.btnHeader}>
                        <PrimaryButton
                            InitialDisabled={this.state.data.state.taken}
                            text={'Buy'}
                            price={this.state.data.props.price}
                        />
                    </div>
                </header>
            )
        }

        return (
            <div className={styles.header} >
                <h1>Select item to see details</h1>
            </div>
        )
    }
}
