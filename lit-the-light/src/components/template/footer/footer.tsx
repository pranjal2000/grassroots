import { Component, h, Prop } from '@stencil/core';
//import * as ngo  from '../../../assets/data/ngo.json';
@Component({
    tag: 'charity-footer',
    styleUrl: 'footer.css',
})
export class CharityFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (

        <section id="credits" class="text-center">
            <span class="social">
            <a href={this.ngo.reachOut.facebook}><i class="fa fa-facebook"></i></a>
            <a href={this.ngo.reachOut.twitter}><i class="fa fa-twitter"></i></a>
            {/* <a href="#"><i class="fa fa-skype"></i></a> */}
            <a href={this.ngo.reachOut.linkedin}><i class="fa fa-linkedin"></i></a>
            <a href={this.ngo.reachOut.instagram}><i class="fa fa-instagram"></i></a>
            <a href={this.ngo.reachOut.youtube}><i class="fa fa-youtube"></i></a>
            </span><br/>
            Copyright &copy; <a href="#">Your Agency</a> 
            <br/>Template By <i class="fa fa-heart"></i> WowThemes.Net
        </section>

    );
    }

}
