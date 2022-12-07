import { Component } from "react";
import { Navigate } from "react-router-dom";
import { useState, useEffect } from 'react'

/**
 * NEW: The error boundary has a function component wrapper.
 */
function ErrorBoundary( { children } ) {
    const [ hasError, setHasError ] = useState( false );
    useEffect( () => {
        if ( hasError ) {
            setHasError( false );
        }
    }, [ hasError ] );
    return (
        /**
         * NEW: The class component error boundary is now
         *      a child of the functional component.
         */
        <ErrorBoundaryInner
            hasError={ hasError }
            setHasError={ setHasError }
        >
            { children }
        </ErrorBoundaryInner>
    );
}

/**
 * NEW: The class component accepts getters and setters for
 *      the parent functional component's error state.
 */
class ErrorBoundaryInner extends Component {
    constructor( props ) {
        super( props );
        this.state = { hasError: false };
    }

    static getDerivedStateFromError( _error ) {
        return { hasError: true };
    }

    componentDidUpdate( prevProps, _previousState ) {
        if ( !this.props.hasError && prevProps.hasError ) {
            this.setState( { hasError: false } );
        }
    }

    componentDidCatch( _error, _errorInfo ) {
        this.props.setHasError( true );
    }

    render() {
        return this.state.hasError
            ? <Navigate to='/error' replace />
            : this.props.children;
    }
}

export default ErrorBoundary;