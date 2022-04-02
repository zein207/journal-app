import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector( state => state.notes );

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
            <span>26 de Agosto 1995</span>

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
