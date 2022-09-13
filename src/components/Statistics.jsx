import styled from 'styled-components';

export default function Statistics({ addFeedback }) {
    return( <div>
                    <button onClick={() => addFeedback('good')}>Good</button>
                    <button onClick={() => addFeedback('neutral')}>Neutral</button>
                    <button onClick={() => addFeedback('bad')}>Bad</button>
                </div>

    )
   
}