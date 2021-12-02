import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --primary-color: #27AE60;
    --secondary-color: #EB5757;
    --gray600-color: #333333;
    --gray300-color: #828282;
    --gray100-color: #E0E0E0;
    --gray0-color: #F5F5F5;
    --negative-feedback-color: #E60000;
    --warning-feedback-color: #FFCD07;
    --sucess-feedback-color: #168821;
    --info-feedback-color: #155BCB;	
}

body {
    font-family:  'Inter', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, b, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
/* outline e box-sizing adicionados ao reset - dica Bruno Kenzie */
	outline: 0;
	box-sizing: border-box;
	/*--------------------------------------------------------  */
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
/* a e button adicionados ao reset - dica Bruno Kenzie */
a{
	text-decoration: none;
}
button{
	cursor: pointer;
}
/* -------------------------------------------------- */
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

h1 {
	font-size: '26px';
	font-weight: 700;
}

h2 {
	font-size: '22px';
	font-weight: 700;
}

h3 {
	font-size: '18px';
	font-weight: 700;
}

`;