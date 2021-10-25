import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">

            <div 
                className="journal__entry-picture"
                style= {{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(/logo192.png)'
                }}
            >

            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Lorem ipsum
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>27</h4>
            </div>
            
        </div>
    )
}
