import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExperience = ({
    experience: {
        company,
        title,
        location,
        current,
        to,
        from,
        description
    }
}) => (
    <Fragment>
        <div>
            <h3 className="text-dark">{company}</h3>
            <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
            {
                !to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>
            }
            <p>
                <strong>Position: {title}</strong>
            </p>
            <p>
                <strong>Description: </strong>{description}
            </p>
        </div>
    </Fragment>
)

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
}

export default ProfileExperience
