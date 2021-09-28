import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
  background-color: ${(props) => props.theme.backgroundColor};
  color:${(props) => props.theme.text};

}

td{
  color:${(props) => props.theme.text};
}

thead{
  background-color: ${(props) => props.theme.table_background}
}
.card-container{
background-color: ${(props) => props.theme.cardBackground};
  color:${(props) => props.theme.text};
}

.accordion-item{
  background-color: ${(props) => props.theme.accordionItem};
}
.accordion-button{
  background-color: ${(props) => props.theme.accordionButton};
  color: ${(props) => props.theme.text};
} 

.accordion-button:not(.collapsed){
  background-color: ${(props) => props.theme.accordionButton};
  color: ${(props) => props.theme.text};
}


`;

export default GlobalStyle;
