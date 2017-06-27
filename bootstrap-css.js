var csjs = require('csjs-inject')

module.exports = csjs`
html                {
  display           : -webkit-flex;
  display           : flex;
  justify-content   : center;
  align-items       : center;
  background-color  : white;
}
ul {
  padding-left: 0px;
}

body {
  width: 100%;
  padding: 0;
}

@media (min-width: 1200px) {
.container {
     width: 60%;
  }
}
@media (min-width: 992px) {
.container {
     width: 970px;
  }
}
@media (min-width: 768px) {
.container {
     width: 60%;
  }
}

.navBar             {
  background-color  : #00a9bc;
  width             : 100%;
  position: fixed;
  top: 0;
  z-index: 10;
}
.title              {
  font-family       : arial;
  color             : white;
  font-weight       : 900;
  font-size         : 1.5em;
  margin-left       : 15px;
  padding: 15px;
}

.navBarList a{
  font-family       : arial;
  color             : white;
  font-weight       : 900;
  font-size         : 1.5em;
}

.card               {
  display           : flex;
  flex-direction    : column;
  align-items       : center;
  width             : 100%;

  background: #2F7C90; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(#2F7C90, #156182); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(#2F7C90, #156182); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(#2F7C90, #156182); /* For Firefox 3.6 to 15 */
  background: linear-gradient(#2F7C90, #156182); /* Standard syntax */
}
.avatar             {
  margin            : 20px auto;
  width             : 125px;
  /*background-color  : #ED4C00;
  border-radius     : 50%;*/
}
.name               {
  margin-bottom     : 10px;
  font-family       : arial;
  color             : white;
  font-size         : 1.2em;
  text-transform    : uppercase;
}
.profession         {
  border-radius: 5px;
  color: white;
  width: 22%;
  height: auto;
  line-height: 2;
  font-size: 1.2em;
  text-align: center;
  font-family: arial;
  background-color: #FF3543;
  margin: auto;
}
.userSection {
  margin: 70px 0 30px 0;
  width: 100%;
  text-align: center;
}

ul.skillList        {
  margin: auto;
}
li.skillList        {
  list-style-type   : none;
}
.skillList {
  width: 100%;
  padding-top: 17px;
}
.bar {
  background-color  : #003B5C;
  width             : 70%;
  height            : 18px;
  float             : right;
  border-radius     : 5px;
  box-shadow: inset 0 1px 2px rgba(0,0,0,.1);
}
.bar2 {
  background-color  : #00D0D6;
  width             : 50%;
  height            : 18px;
  float             : right;
  border-radius     : 5px;
  float             : left;
}
.skillCard {
  margin-top: 15px;
}

.skillCardHeader {
  width: 100%;
  color             : white;
  height            : auto;
  padding           : 2px 15px;
  padding: 6px 15px;
  font-size: 1.2em;
  font-weight: 300;
  border-radius: 5px 5px 0 0;
}
.skillCardHeaderBlue {
  background-color  : #00B1C2;
}

.skillCardHeaderYellow {
  background-color  : #DEE624;
}

.skillCardHeaderRose {
  background-color  : #FF3543;
}

.skillCardHeaderGrass {
  background-color  : #00C54A;
}


.skillCardBody {
  width: 100%;
  background-color  : #002D4A;
  color             : white;
  height            : auto;
  float             : left;
  padding           : 2px 25px 20px 25px;
  margin: auto;
  border-radius: 0 0 5px 5px;
}

.skillSection {
  margin: 20px 0 40px 0;
  width: 100%;
}
.skillTitle {
  line-height: 1.5;
  display: inline-block;
  font-size: 0.5em;
}

.footer {
  height: 50px;
  background-color: #003B5C;
  color: white;
  font-size: 1.3em;
  padding: 13px;
}

.navbar-default .navbar-nav>li>a:focus, .navbar-default .navbar-nav>li>a {
  color: white;
  font-size: 1.2em;
  font-weight: 500;
  padding-top: 19px;
}
`
