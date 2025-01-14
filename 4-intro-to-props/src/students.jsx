/* eslint-disable react/prop-types */
// proptypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number
import PropTypes from 'prop-types'
function Student(props){

    return(
        <div className="student">
            <p>Name : {props.name}</p>
            <p> Age: {props.age}</p>
            <p> Student: {props.isStudent ?"yes" : "no"}</p>
        </div>
    );
}
Student.protoTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student
