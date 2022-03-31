import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            <div
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(logo192.png)'
                }}
            ></div>

            <div className='journal__entry-body'>
                <p className='journal__entry-title'>
                    New day
                </p>
                <p className='journal__entry-content'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptate placeat alias eligendi adipisci dolorem quae mollitia. Quaerat quisquam beatae exercitationem illum! Molestiae voluptatem perspiciatis, at hic expedita totam consequatur.           
                </p>
            </div>

            <div className='journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
