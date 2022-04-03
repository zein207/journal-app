import React from 'react';
import moment from 'moment';

import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = ({ date }) => {

    const dispatch = useDispatch();

    const { active } = useSelector( state => state.notes );

    const noteDate = moment( date );

    const handleSave = () => {

        dispatch( startSaveNote( active ) );
        // console.log(active);
    };

    const handlePictureClick = () => {
        // console.log('click')
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        // console.log(file)

        if( file ) {
            dispatch( startUploading( file ) );
        }
    }

    return (
        <div className="notes__appbar">
            <span>{ noteDate.format( 'MMMM Do YYYY' ) }</span>

            <input
                id='fileSelector'
                type='file'
                name='file'
                style={{ display: 'none' }}
                onChange={ handleFileChange }
            />
            <div>
                <button
                    className="btn mh-1"
                    onClick={ handlePictureClick }
                >
                    Picture
                </button>
                <button
                    className="btn"
                    onClick={ handleSave }
                >
                    Save
                </button>
            </div>
        </div>
    )
}
