import { Component, h, Prop }   from    '@stencil/core';
//import * as ngo                 from    '../../../assets/ngo.json';


@Component({
    tag                         :   'charity-home',
    styleUrl                    :   'home.css',
})
export class CharityHome {

     //@Prop() ngo                 :   any                 =   ngo;

    // private coverSlideOptions   :   any                 =   {
    //     autoplay: {
    //         delay: 4000
    //     }
    //};

    constructor () {
        console.log('Home :: Constructor');
    }

    async componentWillLoad() {
        console.log('Home :: Component will load');
    }

    async componentDidLoad() {
        console.log('Home :: Component did load');
    }

    render() {

        console.log('Home :: Render');

        return [

            <section id="hero" class="section">
                <charity-header ></charity-header> 
                {/* fill in ngo = {} */}
            <div class="container cvr">
                <div class="row">
                    <div class="col-md-5">
                        <div class="herotext">
                            <h1 class="wow bounceInDown" data-wow-duration="1s" data-wow-delay="0.1s">RUN <span class="lighter">CHARITY</span></h1>
                            <p class="lead wow zoomIn" data-wow-duration="2s" data-wow-delay="0.5s">
                                When we give cheerfully and accept gratefully, everyone is blessed.
                            </p>
                            {/* <p>
                                <a href="#" class="btn btn-default btn-lg wow fadeInLeft" role="button"> View Gallery </a> &nbsp; <a href="#" class="btn btn-default btn-lg wow fadeInRight" role="button">Find a Cause</a>
                            </p> */}
                        </div>
                    </div>
                    <div class="col-md-7">
                    </div>
                </div>
            </div>
            </section>

        ];

    }

}
