import PropTypes from 'prop-types'

export const ContentWrapper = ({title, children}) =>{
    return(
        <div>
            <h1>{title}</h1>
            <>{children}</>
        </div>
    );
}

ContentWrapper.protoTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}