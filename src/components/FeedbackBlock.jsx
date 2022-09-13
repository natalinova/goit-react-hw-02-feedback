import styled from 'styled-components';
import { Block } from './FeedbackStyled';

 const FeedbackBlock = ({ title, children }) => {
     return (
        <Block>
             <h2>{ title}</h2>
             {children}
        </Block>
        
        
    )

} 

export default  FeedbackBlock