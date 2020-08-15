import React from 'react';
import Styles from './Layout.module.css'

const layout = (props) => {

        return (
            <React.Fragment>
                <main className={Styles.Content}>
                    {props.children}
                </main>
            </React.Fragment>
        )
}

export default layout;