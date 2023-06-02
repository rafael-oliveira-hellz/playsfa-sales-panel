import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

//Scrollbar props
*::-webkit-scrollbar {
  width: 0.5rem;
}


*::-webkit-scrollbar-track {
  background-color: #3F3F3F;
}

*::-webkit-scrollbar-thumb {
  background: #f5f5f5;
  border-radius: 2.5rem;
}

html{
  font-size: 62.5%; //para usar rem como se fosse px.
}

/* h1,
h2,
h3,
h4,
h5,
h6,
p {
    font-family: 'Roboto', sans-serif;
} */

li{
  list-style: none;
}

a{
  text-decoration: none;
}
input{
  color: #000;
}
input:disabled {
  background-color: #c0c0c0;
}
input::placeholder{
  color:rgba(47, 47, 47, 0.322);
}
select, option{
  color:rgba(47, 47, 47);
}
button span{
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
//polyline se refere aos componentes svg do react-icons
polyline {
  fill: white;
  stroke: white;
  align-self: center;
}
`;
