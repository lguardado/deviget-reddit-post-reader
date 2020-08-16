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
        <h3 className={styles.DetailsContainer}>
            Select an item to see its details
        </h3>
    )
}

const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem
    }
}


export default connect(mapStateToProps)(Details)