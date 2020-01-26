import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileEducation = ({
    education: {
        school,
        degree,
        fieldofstudy,
        current,
        to,
        from,
        description
    }
}) => (
    <Fragment>
        <div>
            <h3 className="text-dark">{school}</h3>
            <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
            {
                !to ? 'Now' : <Moment format="YYYY/MM/DD">{to}</Moment>
            }
            <p>
                <strong>Degree: {degree}</strong>
            </p>
            <p>
                <strong>Fieldofstudy: {fieldofstudy}</strong>
            </p>            
            <p>
                <strong>Description: </strong>{description}
            </p>
        </div>
    </Fragment>
)

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
}

export default ProfileEducation
