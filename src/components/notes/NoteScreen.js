import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activeNote } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active: note } = useSelector(state => state.notes);
    // console.log(note);

    const [ formValues, handleInputChange, reset ] = useForm( note );

    const { body, title } = formValues;

    const activeId = useRef( note.id );
    const activeUrl = useRef( note.url );

    useEffect( () => {

        if( note.id !== activeId.current ) {
            reset( note );
            activeId.current = note.id
        }
        if( note.url !== activeUrl.current ) {
            reset( note );
            activeUrl.current = note.url;
        }

    }, [ note, reset ]);

    useEffect(() => {

        dispatch( activeNote( formValues.id, {...formValues} ) )

    }, [ formValues, dispatch ]);

    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                    name='title'
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder="Today highlights"
                    className="notes__textarea"
                    name='body'
                    value={ body }
                    onChange={ handleInputChange }
                ></textarea>

                {
                    (note.url)
                    &&
                    (
                        <div className="notes__image">
                            <img
                                src={ note.url }
                                alt="random"
                            />
                        </div>
                    )
                }

            </div>
        </div>
    )
}
