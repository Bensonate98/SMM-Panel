.dark-mode {
background: #050503;
}
#main-wrapper[data-layout=vertical][data-sidebartype=full] .page-wrapper {
margin-left: 0;
}
#main-wrapper[data-layout=vertical] .topbar .top-navbar .navbar-header[data-logobg=skin6], #main-wrapper[data-layout=horizontal] .topbar .top-navbar .navbar-header[data-logobg=skin6] {
background: #f9fbfd;

border-bottom: 1px solid #edf2f9;
}

.topbar .navbar-collapse {
padding: 0 10px 0 0;
border-bottom: 1px solid #edf2f9;
border-left: 1px solid transparent;
}


.topbar .top-navbar .navbar-header {
box-shadow: unset;
-webkit-box-shadow: unset;
-moz-box-shadow: unset;
}

.card {
border-bottom: 1px solid rgba(162,176,190,.15);
background: transparent;
box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
-webkit-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.2);
}

.headerNav{
border-bottom: 1px solid rgba(162,176,190,.15);
background: transparent;
box-shadow: 0 10px 10px 0 rgba(0,0,0,.15);
-webkit-box-shadow: 0 10px 10px 0 rgba(0,0,0,.15);
-moz-box-shadow: 0 10px 10px 0 rgba(0,0,0,.15);
}
.headerNav .navbar {
display: flex;
}
.push-notification {
position: relative;
/*right: 12px;*/
/*top: 18px;*/
}
.headerNav .push-notification .notify-no {
position: absolute;
top: 0;
right: 4px;
line-height: 11px;
padding: 4px 6px;
}
.headerNav .navbar{
padding-right: 60px;
}
.list-style-none .scrollable{
max-height: 250px;
overflow: auto;
}
/* width */
.list-style-none .scrollable::-webkit-scrollbar {
width: 3px;
}

/* Track */
.list-style-none .scrollable::-webkit-scrollbar-track {
background: #f1f1f1;
}

/* Handle */
.list-style-none .scrollable::-webkit-scrollbar-thumb {
background: rgb(123,63,255);
}

/* Handle on hover */
.list-style-none .scrollable::-webkit-scrollbar-thumb:hover {
background: #555;
}

.bell-font{
font-size: 1.25rem;
color: #b8c3d5;
}

.font16{
    font-size: 16px;
}
.font14{
    font-size: 14px;
}

.dropdown-item .active > .icon-color{
    color: #fff;
}

.dropdown-item .active > i.icon-color {
color: #fff;
}


@media screen and (max-width: 991px){
.headerNav .navbar {
display: flex;
align-items: center;
}
.headerNav .navbar-brand {
order: 1;
}
.headerNav .push-notification {
order: 2;
position: relative;
top: initial;
right: initial;
}
.headerNav .navbar-toggler {
order: 3;
}
.headerNav .navbar-collapse {
order: 4;
width: 100%;
align-items: flex-end !important;
text-align: right;
}
.headerNav .navbar-collapse .navbar-nav {
align-items: flex-end !important;
}
.headerNav .navbar{
padding-right: 0px;
}
.headerNav .push-notification .right-dropdown {
max-width: 300px !important;
right: initial !important;
left: -150px !important;
}

}



.waves-effect,
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
color: #fff;
background-color: rgba(123,63,255,0.76);
border-radius: 6px;
background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDEgMSIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+CiAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkLXVjZ2ctZ2VuZXJhdGVkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjAlIiB5MT0iMCUiIHgyPSIxMDAlIiB5Mj0iMCUiPgogICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZhYzYxZSIgc3RvcC1vcGFjaXR5PSIxIi8+CiAgICA8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmYjhiMWUiIHN0b3Atb3BhY2l0eT0iMSIvPgogIDwvbGluZWFyR3JhZGllbnQ+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);
background: -moz-linear-gradient(left, rgb(123,63,255) 0%, rgba(198,79,255,0.76) 100%);
background: -webkit-linear-gradient(left, rgb(123,63,255) 0%,rgba(198,79,255,0.76) 100%);
background: linear-gradient(to right, rgb(123,63,255) 0%,rgba(198,79,255,0.76) 100%);
}


.btn-primary:not(:disabled):not(.disabled).active,
.btn-primary:not(:disabled):not(.disabled):active,
.show>.btn-primary.dropdown-toggle {
color: #fff;
border-color: rgb(123,63,255);
background: -moz-linear-gradient(left, rgb(123,63,255) 0%, rgba(198,79,255,0.76) 100%);
background: -webkit-linear-gradient(left, rgb(123,63,255) 0%,rgba(198,79,255,0.76) 100%);
background: linear-gradient(to right, rgb(123,63,255) 0%,rgba(198,79,255,0.76) 100%);
}

#boltd .navbar-nav .nav-item a.nav-link,
#boltd .navbar-nav .nav-item a.nav-link{
display: inline-block;
padding: 8px 20px;
color: #000;
font-weight: 500;
border-radius: 6px;

}
#boltd .navbar-nav .nav-item  a.nav-link.active{
color: rgb(198,79,255);
background: transparent;
}

.dark-mode .dropdown-menu{
background-color: #222;
}
.dark-mode .dropdown-item {
    color: #bfc8cb;
    background-color: transparent;
}

.dropdown-item.active,
.dropdown-item:active {
background-color:rgb(198,79,255);
}
.dark-mode .dropdown-item.active,
.dark-mode .dropdown-item:active{
color: #fff
}

#boltd .navbar-nav li.nav-item.dropdown{
border-radius: 6px;
}
#boltd .navbar-nav li.nav-item.dropdown.active .nav-link{
color: #000;
}

#boltd .navbar-nav li.nav-item.dropdown.active .nav-link {
color:rgb(198,79,255);
}

#boltd .navbar-nav li.nav-item.dropdown.active{
color: rgb(123,63,255);
background: transparent;
}
@media (min-width: 768px){

#main-wrapper[data-layout=vertical][data-sidebar-position=fixed][data-sidebartype=mini-sidebar] .topbar .top-navbar .navbar-collapse, #main-wrapper[data-layout=vertical][data-sidebartype=mini-sidebar] .page-wrapper {
margin-left: 0;
}
}

.topbar .top-navbar .navbar-header .navbar-brand {
padding: 0;
}
.navbar-brand img {
max-height: 50px !important;
}
.gateway-img{
width: 100%;
height: auto;
}

.card img.gateway{
height:  auto;
width: 100%;
}
.deposit-footer{
padding: .5rem 10px;
}
#main-wrapper {
min-height: 100vh;
padding-bottom: 30px;
background: white;
}
.dark-mode #main-wrapper{
background: transparent;
}
.page-wrapper {
background: transparent;
box-shadow: unset;
}
.footer{
position: absolute;
bottom:0;
display: flex;
justify-content: center;
width: 100%;
}
.footer p{
padding-top:30px;
margin:0;
}
@media (max-width: 575px) {
.footer{
position:relative;
}
}


.breadcrumb.center-items{
display:inline-block;
margin:0 auto;
}
.breadcrumb{
display: inline-block;
padding: 0;
margin: 0;
background: transparent;
overflow: hidden;
}
.breadcrumb li{
float: left;
padding: 8px 15px 8px 50px;
background: linear-gradient(to right, rgb(123,63,255) 0%,rgba(198,79,255,0.76) 100%);
font-size: 14px;
color: #000;
position: relative;
}
.breadcrumb li:first-child{ background: #e9eef1; }
.breadcrumb li:last-child{
background: #d2d7da;
margin-right: 18px;
}
.breadcrumb li:before{ display: none; }
.breadcrumb li:after{
content: "";
display: block;
border-left: 18px solid rgba(198,79,255,0.76);
border-top: 18px solid transparent;
border-bottom: 18px solid transparent;
position: absolute;
top: 0;
right: -18px;
z-index: 1;
}
.breadcrumb li:first-child:after{ border-left-color: #e9eef1; }
.breadcrumb li:last-child:after{ border-left-color: #d2d7da; }
.breadcrumb li a{
font-size: 14px;
font-weight: 500;
color: #151719;
}

.dark-mode .breadcrumb li:first-child {
    background: #5e646e;
}
.dark-mode .breadcrumb li:first-child:after {
border-left-color: #5e646e;
}
.dark-mode .breadcrumb li a {
color: #fff;
}

.dark-mode .breadcrumb li:last-child {
background: #3a3a3a;
}
.dark-mode .breadcrumb li{
color: #fff;
}
.dark-mode .breadcrumb li:last-child:after {
border-left-color: #3a3a3a;
}
@media only screen and (max-width: 479px){
.breadcrumb li{ padding: 8px 15px 8px 30px; }
}


.width-40p{
width: 40px;
}


.image-input {
position: relative;
width: 100%;
min-height: 300px;
background: #f0f8ff;
}
.dark-mode .image-input{
background: #050503;
}

.image-input #image {
position: absolute;
opacity: 0;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 10;
cursor: pointer;
}

.image-input #image-label {
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
padding: 70px 100px;
z-index: 5;
opacity: 0.3;
cursor: pointer;
background-color: #fff;
font-size: 25px;
border: 2px dashed #000;
margin: auto;
text-align: center;
}

.image-input .preview-image {
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
max-width: 150px;
}



.sideNavTicket{
background: #dfe7f3;
color: #dbe5d8;
/*color: #307fb0;*/
/*color: #edf1eb;;*/
}

.chat-list .chat-item .chat-content .msg {
background-color: #eef5ff;
font-size: 14px;
max-width: 95%;
}

li.chat-item.list-style-none.replied.mt-3.text-right {
display: flex;
flex-direction: row-reverse;
}

.chat-list .chat-item.replied .chat-img {
margin-left: 15px;
}

.chat-list .chat-item.replied .chat-content .msg{
background-color: #e4fbf8;
text-align: left;
}

.dark-mode .chat-list .chat-item.replied .chat-content .msg{
background-color: #050503;
}


.button-wrapper {
position: relative;
background: rebeccapurple;
top: -5px;
}

.button-wrapper span.label {
position: relative;
z-index: 0;
background: #00bfff;
cursor: pointer;
color: #fff;
font-size: 18px;
}

#upload {
opacity: 0;
cursor: pointer;

}
.new-file-upload {
position: relative;
padding: 0;
display: flex;
align-items: center;
justify-content: center;
line-height: initial;
overflow: hidden;
width: 42px;
height: 42px;
border-radius: 50%;
background-color: rgba(123,63,255,0.76);
cursor: pointer;
}
.new-file-upload input[type=file] {
position: absolute;
top: 0;
left: 0;
width: 42px;
height: 42px;
border-radius: 50%;
cursor: pointer;
}
.new-file-upload span,
.new-file-upload span::before{
cursor: pointer;
}
.upload-btn{
position: relative;
}
.new-file-upload a{
color: #fff;
}

.select-files-count{
position: absolute;
font-size: 12px;
white-space: nowrap;
right: 20px;
}


.ticket-box{
background: #f9fbfd;
}
.deposit-footer{
padding: .75rem 10px;
}
.error {
font-size: 13px;
}
.copytext{
cursor: pointer;
}

.copyBoard{
background: #e9eef1;
color: #1c2d41;
}

.api-details {
margin-top: 20px;
background: #fff;
border-radius: 12px;
overflow: hidden;
-webkit-box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
}
.api-details .content {
padding: 20px 20px;
color: #171717;
font-size: 14px;
}
.api-details h5 {
background: #9ca3ad;
margin: 0;
padding: 20px 20px;
color: #fff;
font-size: 17px;
}
.api-details .content h6 {
text-transform: uppercase;
margin-bottom: 2px;
font-size: 14px;
font-weight: 700;
line-height: 1.2;
}
.api-details .content p {
font-weight: 400;
line-height: 1.5;
}

.api-code {
background: url(../../../../assets/images/dots.png) no-repeat 30px 30px #11064a;
border-radius: 12px;
color: #fff;
position: relative;
padding: 60px 30px 30px;
margin-top: 40px;
}
.dark-mode .api-code{
background: url(../../../../assets/images/dots.png) no-repeat 30px 30px #323232;
}


.dark-mode label,
.dark-mode  .api-details .content p {
color: #fff;
}
.dark-mode .card.api-details .card-title{
background: #323232;
}
.dark-mode .api-token{
background:transparent;
color: #fff;
}
table tr {
background-color: #f8f8f8;
border: 1px solid #ddd;
padding: .35em;
}

.dark-mode table thead th {
color: #cfcfcf!important;
}
.dark-mode table tr {
background-color: #050503;
border: 1px solid #050503;
padding: 0.35em;
color: #bfc8d7;
}

.dark-mode  select option {
background: rgba(0, 0, 0, 0.9);
color: #fff;
}
.dark-mode  .table thead th {
border-bottom: 2px solid #050503;
}
.dark-mode .bg-primary{
    background-color: #212121!important;
}
.dark-mode .modal-footer{
border-top: 1px solid #050503;
}
.dark-mode .modal-header{
    border-bottom: 1px solid #050503;
}
.dark-mode .modal-content{
background-color: #212121!important;
}

.dark-mode table  tr:nth-child(odd) {background-color: #222222;}

.dark-mode .table-hover tbody tr:hover {
color: #7c8798;
background-color: #222222;
}

table th {
font-size: .85em;
letter-spacing: .1em;
}
.table td, .table th {
padding: .625em;
vertical-align: top;
border-top: none;
}
.right-dropdown {
right: -12px !important;
}
.right-dropdown.dropdown-menu.dropdown-menu-right.mailbox.animated.bounceInDown.show {
width: 380px;
}
@media screen and (max-width: 600px) {
table {
border: 0;
}

table thead {
border: none;
clip: rect(0 0 0 0);
height: 1px;
margin: -1px;
overflow: hidden;
padding: 0;
position: absolute;
width: 1px;
}

table tr {
/*border-bottom: none;*/
display: block;
margin-bottom: .625em;
}

table td {
border-bottom: none;
display: block;
font-size: .8em;
text-align: right;
}

table td::before {
content: attr(data-label);
float: left;
font-weight: bold;
}

table td:last-child {
border-bottom: 0;
}
}





/*---- FIXEDSIDEBAR ----*/
.fixedsidebar {
position: fixed;
top: 0;
right: 0;
width: 400px;
height: 100%;
padding: 0;
background-color: #f3f3f3 !important;
overflow-x: hidden;
overflow-y: scroll;
box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
z-index: 9999;
-webkit-transition: all 0.35s ease-in-out;
-moz-transition: all 0.35s ease-in-out;
-ms-transition: all 0.35s ease-in-out;
-o-transition: all 0.35s ease-in-out;
transition: all 0.35s ease-in-out;
}
.rfixed {
right: -400px;
-webkit-transition: all 0.35s ease-in-out;
-moz-transition: all 0.35s ease-in-out;
-ms-transition: all 0.35s ease-in-out;
-o-transition: all 0.35s ease-in-out;
transition: all 0.35s ease-in-out;
}

.fixed-icon {
position: fixed;
top: 103px;
right: 400px;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content: center;
border: 0;
background-color: #fff;
box-shadow: 0 0 8px 3px rgba(0, 0, 0, .2);
z-index: 999999;
-webkit-transition: all 0.35s ease-in-out;
-moz-transition: all 0.35s ease-in-out;
-ms-transition: all 0.35s ease-in-out;
-o-transition: all 0.35s ease-in-out;
transition: all 0.35s ease-in-out;
cursor: pointer;
border-radius: 3px;
color: rgb(123,63,255);
}
.rfixedicon {
right: 0;
-webkit-transition: all 0.35s ease-in-out;
-moz-transition: all 0.35s ease-in-out;
-ms-transition: all 0.35s ease-in-out;
-o-transition: all 0.35s ease-in-out;
transition: all 0.35s ease-in-out;
}

/* width */
.fixedsidebar::-webkit-scrollbar {
width: 3px;
}

/* Track */
.fixedsidebar::-webkit-scrollbar-track {
background: #f1f1f1;
}

/* Handle */
.fixedsidebar::-webkit-scrollbar-thumb {
background: #555;
}

/* Handle on hover */
.fixedsidebar::-webkit-scrollbar-thumb:hover {
background: #555;
}

.fs-header {
position: fixed;
width: 400px;
padding: 10px 7.5px;
background-color: #545051 ;
}
.fs-header h3{
color: #fff;
}
.btn-close {
display: inline-block;
padding: 0 8px;
color: #fff;
font-size: 16px;
cursor: pointer;
}
.fs-wrapper {
height: 100%;
padding: 63px 8px 0;
background: #f7f7f7;
}
.dark-mode .fs-wrapper{
background: #222222;
}
.fs-wrapper .content{
margin: 5px;
padding: 10px;
border: 0;
font: inherit;
vertical-align: baseline;
-webkit-box-sizing: border-box;
box-sizing: border-box;
background: #fff;
box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
-webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.2);
}

.dark-mode .fs-wrapper .content{
background: #050503;
}


.featureDate {
font-size: 14px;
color: #8da2b5;
margin-bottom: 8px;
display: -ms-inline-flexbox;
display: flex;
flex-wrap: nowrap;
text-transform: capitalize;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 100%;
white-space: nowrap;

}
.category {
display: inline-block;
background: rgba(198,79,255,1);
padding: 4px 6px;
font-size: 10px;
color: #fff;
border-radius: 10px;
margin-right: 5px;
overflow: hidden;
text-transform: uppercase;
-o-text-overflow: ellipsis;
text-overflow: ellipsis;
max-width: 100%;
vertical-align: middle;
white-space: nowrap;
}
.featureDate span {
display: inline-block;
vertical-align: baseline;
}
.featureDate .date, .featureDate span {
color: #8da2b5 !important;
}
.category.categoryNew, .catItem .ico.new {
background: #3ec25f !important;
}

.feature h3, h2.featureTitle {
font-size: 16px;
font-weight: 700;
margin-bottom: 15px;
line-height: 1.4;
}
.featureTitle {
font-size: 20px !important;
color: #000;
}
.dark-mode .featureTitle {
color: #cfcfcf;
}
.featureContent {
font-size: 16px;
line-height: 1.4;
}

.featureContent p {
line-height: inherit;
margin-bottom: 15px;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
line-height: inherit;
vertical-align: baseline;
-webkit-box-sizing: border-box;
box-sizing: border-box;
}
.dark-mode .featureContent p{
color: #bfc8d7;
}
#Notiflix-Icon-Success,
#Notiflix-Icon-Failure,
#Notiflix-Icon-Warning
{
fill: #fff !important;
}

span.font-12.d-block.text-muted.text-truncate {
color: #333 !important;
}

[v-cloak] {
display: none;
}
@media screen and (max-width:575px){
.headerNav .push-notification .right-dropdown {
left: -173px !important;
}
.fixedsidebar{
max-width: 280px;
}
.fixed-icon{
right:280px;
}
.fixed-icon.rfixedicon{
right:0;
}
.btn-close.close-sidebar {
position: absolute;
top: 0;
left: 65%;
}

}
html[dir=rtl],
html[dir=rtl] body{
text-align: right;
}
html[dir=rtl] .dropdown-menu {
text-align: right;
}

html[dir=rtl] .btn-primary{
margin-right: 5px;
}
html[dir=rtl] a.show-hide-icon.float-right{
float: left !important;
}

html[dir=rtl] button.btn.btn-default.btn-sm.text-white.float-right.waves-effect.generateBtn {
float: left !important;
}

html[dir=rtl] .modal-header .close {
padding: 0;
margin: 0;
}
html[dir=rtl] .upload-btn{
margin-left: 5px;
}
html[dir=rtl] li.chat-item.list-style-none.replied.mt-3.text-right .chat-content.d-inline-block.pr-3 .font-weight-medium{
text-align: left;
}
html[dir=rtl] li.chat-item.list-style-none.replied.mt-3.text-right .chat-time.d-block.font-10.mt-0.mr-0.mb-3{
text-align: left;
}

html[dir=rtl] .d-flex.d-lg-flex.d-md-block.align-items-center .ml-auto.mt-md-3.mt-lg-0{
margin-right: 50%;
}
.order-details-column{
width: 10%!important;
}

/*html[dir=rtl] .push-notification {*/
/*left: 12px;*/
/*}*/
/*html[dir=rtl] .headerNav .push-notification .notify-no {*/

/*}*/
html[dir=rtl] .breadcrumb.center-items {
display: flex !important;
}
html[dir=rtl] .breadcrumb li {
padding: 8px 50px 8px 8px;
}
html[dir=rtl] .breadcrumb li:last-child {
margin-right: 0;
}
html[dir=rtl] .breadcrumb li::before {
content: "";
display: block;
border-right: 18px solid #e9eef1;
border-left: 18px solid transparent;
border-top: 18px solid transparent;
border-bottom: 18px solid transparent;
position: absolute;
top: 0;
left: -36px;
z-index: 1;
}
html[dir=rtl] .breadcrumb li.active::before {
/*display: none;*/
border-right: 18px solid #d2d7da;
}
html[dir=rtl] .breadcrumb li.custom-breadcrumb-li::before {
border-right: 18px solid rgb(123,63,255);
}
html[dir=rtl] .breadcrumb li::after{
display: none;
}

.dark-mode .page-wrapper .nav-tabs {
border-bottom: 1px solid #050503;
}
.dark-mode .page-wrapper .nav-tabs .nav-item.show .nav-link,
.dark-mode .page-wrapper .nav-tabs .nav-link.active
{
color: #ffffff;
background-color: #050503;
border-color: #050503 #050503 #050503;
}

.dark-mode  .user-service-list .card-body .table tr:nth-child(odd) {
background-color: #212121;
}

.dark-mode .user-service-list .card-body .table tr:nth-child(even) {
background-color: #050503;
}
.dark-mode .user-service-list .card-body .table tr{
    color: #bfc8d7
}
.dark-mode a.btn.btn-header-link{
    color: #e9eaed;
}


.admin-fa_icon  span.opacity-7.text-muted .fa,
.admin-fa_icon  span.opacity-7.text-muted .fas,
.admin-fa_icon  span.opacity-7.text-muted .far,
.admin-fa_icon  span.opacity-7.text-muted .fab,
.admin-fa_icon  span.opacity-7.text-muted .feather
{
color: rgb(198,79,255) !important;
}


@media (max-width: 375px) {
.admin-fa_icon .card .card-body {
padding: 25px 12px;
}
}


.admin-fa_icon h4.card-title{
font-weight: 500;
display: inline-block;
font-size: 24px;
color: #34395e;
}
.user-service-list .card-body{
padding: 15px 10px 0px 10px;
}

.user-service-list .card-body .table tr:nth-child(even) {
background-color: #f2f2f2;
}

.user-service-list .card-body .table tr:nth-child(odd) {
background-color: #fff;
}

.user-service-list .card-body  table tbody tr {
border: none !important;
}

.user-service-list .card-body.table td,
.user-service-list .card-body .table th {
padding: 5px;
vertical-align: top;
border-top: none;
font-size: 16px;
line-height: 1.4;
}
.user-service-list .card-body thead th {
background-color: #C1C7D0;
border-color: #C1C7D0;
color: #000;
}

.user-service-list .table td,
.user-service-list .table th{
    padding: .25em;
}
.bg-transparent{
background: transparent !important;
}


.dark-mode .text-dark {
color: #fff!important;
}
.dark-mode .card {
background: #222;
}
.dark-mode .card .card-title {
color: #fff;
}
.dark-mode h4,
.dark-mode h5,
.dark-mode h6,
.dark-mode input,
.dark-mode select,
.dark-mode textarea
{
color: #fff;
}

.dark-mode .card {
    background: #222;
}
.dark-mode .table .thead-dark th{
background: #222222;
}
.dark-mode table thead th,
.dark-mode .user-service-list .card-body thead th{
color: #cfcfcf!important;
}

@media (max-width: 1440px){
#boltd .navbar-nav .nav-item a.nav-link, #boltd .navbar-nav .nav-item a.nav-link {
display: inline-block;
padding: 8px 14px;
color: #000;
font-weight: 500;
border-radius: 6px;
}
}

}


@media (max-width: 1366px){
#boltd .navbar-nav .nav-item a.nav-link, #boltd .navbar-nav .nav-item a.nav-link {
display: inline-block;
padding: 8px 8px;
color: #000;
font-weight: 500;
border-radius: 6px;}
}
}



.w-150px{width: 150px!important}
.wh-200-150{
width: 200px;
height: 150px;
}
img.w-150px {
width: 150px;
}

.dark-mode button.infoBtn{
color: #3e59e3 !important;
background: transparent;
border: 1px solid #3e59e3;
}
.dark-mode button#details {
    color: rgb(198,79,255) !important;
    background: transparent;
}
.dark-mode button#details.orderBtn {
border: 1px solid rgb(198,79,255);
}
.dark-mode .list-group-item{
background-color: transparent;
}

.dark-mode  .page-link {
color: #fff;
background-color: #050503;
border: 1px solid #222222;
}

.dark-mode .page-item.disabled .page-link {
background-color: rgba(5, 5, 3,0.7);
border-color: #212121;
}

.dark-mode  span.font-12.d-block.text-muted.text-truncate {
color: #5e646e !important;
}
.dark-mode a.nav-link.pt-3.text-center.text-dark.notification-clear-btn {
color: #c2c5c9 !important;
}
/*******Custom CSS*********/

#feature .nav-link {
position: relative;
background: transparent;
margin-bottom: 20px;
border: 1px solid #a460f2;
color: #a460f2;
transition: all 0.35s ease-in-out;
display: block;
}
#feature .nav-link:hover,
#feature .nav-link.active {
background:#a460f2 !important;
color:#fff;
}
#feature .nav-link::after {
content:"";
height:20px;
width:2px;
background:#a460f2;
position: absolute;
top:100%;
left:calc(50% - 1px);
}
#feature .nav-link:last-child::after {
display: none;
}
#feature .tab-content {
flex: 1;
display: block;
border:1px solid #fff;
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
height: 100%;
margin-left: 20px;
padding:15px;
}

#feature .card-body .nav {
flex-direction: column;
text-align:center;
}
@media screen and (max-width: 575px) {
#feature .card-body > div {
flex-direction: column;
}
#feature .card-body .nav {
flex-direction: row;
flex-wrap: wrap;
}
#feature .card-body .nav .nav-link {
flex:1;
min-width: 90px;
margin: 5px;
}
#feature .nav-link::after {
display: none;
}
#feature .tab-content {
width:100%;
margin-left:0;
margin-top:5px;
}
}
.cursor-pointer{
cursor:pointer;
}
.dark-mode input,
.dark-mode textarea,
.dark-mode .form-control:focus,
.dark-mode .form-control{
    background: transparent!important;
    color:#fff!important;
    border: 1px solid #5e5d5d;
}
.dark-mode .custom-file-label {
    background-color: transparent;
    border: 1px solid #5e5d5d;
}
.dark-mode .input-group-text {
    color: #fff;
    background-color: #343030;
    border: 1px solid #5e5d5d;
}
.dark-mode .custom-file-label::after{
    background-color: #726767;
}
.dark-mode .custom-file-label,
.dark-mode .custom-file-label::after{
    color: #fff;
}
.dark-mode .user-service-list .card-body thead th {
background-color: #050503;
border-color: #050503;
color: #fff;
}


.dark-mode .table-dark.table-striped tbody tr:nth-of-type(odd) {
background-color: #222;
color: #f7f7f8;
}
.dark-mode  .navbar-nav .nav-item a.nav-link,
.dark-mode  #boltd .navbar-nav .nav-item a.nav-link{
color: #fff;
}

.dark-mode .admin-fa_icon span.opacity-7.text-muted .fa,
.dark-mode .admin-fa_icon span.opacity-7.text-muted .fas,
.dark-mode .admin-fa_icon span.opacity-7.text-muted .far,
.dark-mode .admin-fa_icon span.opacity-7.text-muted .fab,
.dark-mode .admin-fa_icon span.opacity-7.text-muted .feather{
    color: #788190!important;
}

.dark-mode .bg-white{
background-color: #222!important;
}
