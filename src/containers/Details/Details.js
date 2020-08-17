import React from 'react'
import { connect } from 'react-redux'

import ItemDetails from '../../components/ItemDetails/ItemDetails'
import styles from './Details.module.css'

const Details = ({ selectedItem }) => {
    if (selectedItem) {
        return (
            <div className={styles.DetailsContainer}>
                <h1>Details</h1>
                <ItemDetails item={selectedItem} />
            </div>
        )
    }
    return (
        <div className={styles.DetailsContainer}>
            <h3>Details</h3>
            <h4>
                Select an item to see its details
            </h4>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selectedItem: state.selectedItem
    }
}


export default connect(mapStateToProps)(Details)