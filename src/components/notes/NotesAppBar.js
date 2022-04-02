import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startSaveNote } from '../../actions/notes';

export const NotesAppBar = () => {

    const dispatch = useDispatch();

    const { active } = useSelector( state => state.notes );

    const handleSave = () => {

        dispatch( startSaveNote( active ) );
        // console.log(active);
    };

    return (
        <div className="notes__appbar">
            <span>26 de Agosto 1995</span>
            <div>
                <button className="btn mh-1">
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
