import React from 'react'

const Container = ({ children }) => {
    return (
        <div>
            <div className="container-sm my-4 shadow-lg p-3 bg-body rounded">
                {children}
            </div>
        </div>
    )
}

export default Container