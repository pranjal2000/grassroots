import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'charity-header',
    styleUrl: 'header.css',
})
export class CharityHeader {

     @Prop() ngo                 :   any                 =   {};

    render() {

        if (!this.ngo) return '';
        
        //console.log(this.ngo.projects);

        return [
            <header id="header" class="navbar navbar-inverse navbar-fixed-top" role="banner">
<div class="container">
	<div class="navbar-header">
		<button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		</button>
		{/* <!-- Your Logo --> */}
		<a href="/" class="navbar-brand"> { this.ngo.name }  <span class="lighter">NGO</span></a>
	</div>
	{/* <!-- Start Navigation --> */}
	<nav class="collapse navbar-collapse bs-navbar-collapse navbar-right" role="navigation">
	<ul class="nav navbar-nav">
		<li>
		<a><ion-router-link color={location.pathname === '/' ? 'primary' : 'medium' } href='/'> Home </ion-router-link></a>
		</li>
		<li>
		<a> <ion-router-link color={location.pathname.startsWith('/about') ? 'primary' : 'medium' } href="/about">About</ion-router-link></a>
		</li>
		<li>
		{/* <a href="#gallery">Gallery</a> */}
        <a> <ion-router-link href="/projects" color={location.pathname.startsWith('/projects') ? 'primary' : 'medium'} > Projects </ion-router-link> </a>
		</li>
		<li>
		{/* <a href="#slider">Donate</a> */}
        <a> <ion-router-link href="/donate" color={location.pathname.startsWith('/donate') ? 'primary' : 'medium'} > Donate </ion-router-link> </a>
		</li>
		{/* <li>
		<a href="#faq">FAQ</a>
		</li> */}
		<li>
		<a> <ion-router-link href="/contact" color={location.pathname.startsWith('/contact') ? 'primary' : 'medium'} > Contact us </ion-router-link> </a>
		</li>
	</ul>
	</nav>
</div>
</header>
        

        ];
    }

}
