import React from 'react'
import { connect } from 'react-redux'

import ItemDetails from '../../components/ItemDetails/ItemDetails'
import styles from './Details.module.css'

const Details = ({ selectedItem }) => {
    if (selectedItem) {
        return (
            <div className={styles.DetailsContainer}>
                <ItemDetails item={selectedItem.data} />
            </div>
        )
    }
    return (
        <div className={styles.DetailsContainer}>
            Select an item to see its details
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem
    }
}


export default connect(mapStateToProps)(Details)