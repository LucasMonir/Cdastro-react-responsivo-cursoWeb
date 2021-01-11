import React from 'react';
import { Link } from 'react-router-dom';
export default props => <Link to={`${props.path}`}>
    <i className={`fa fa-${props.section}`}>{props.title}</i>
</Link>