import Head from 'next/head'
import React from 'react'

const Container = ({ children }) => {
    return (

        <div>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
            </Head>
            <div className="container-sm my-4 shadow-lg p-3 bg-body rounded text-center">
                {children}
            </div>
        </div>
    )
}

export default Container