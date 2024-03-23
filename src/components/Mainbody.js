import React from 'react'
import Sidebar from './Sidebar'

export default function Mainbody() {
    return (
        <>
            <div className='row'>
                <div className='col-sm-8'>
                <div className='container d-flex flex-column justify-content-center align-items-center mt-5 '>
                    <img src='./whastappdp.jpg' style={{height:'100vh',width:'auto'}}/>
                </div>
                </div>
                <div className='col-sm-4'>
                <Sidebar />
                </div>
            </div>
        </>
    )
}
