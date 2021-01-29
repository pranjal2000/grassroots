import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../assets/data/ngo.json';

@Component({
    tag                         :   'charity-about',
    styleUrl                    :   'about.css',
})
export class CharityAbout {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About :: Constructor');
    }

    async componentWillLoad() {
        console.log('About :: Component will load');
    }

    async componentDidLoad() {
        console.log('About :: Component did load');
    }


    render() {

        return (
        <ion-content>
        <charity-header ngo={this.ngo}></charity-header>
        <section id="about" class="parallax section cvr1">
            <div class="wrapsection">
                <div class="parallax-overlay cvr2"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            {/* <!-- Title --> */}
                            <div class="maintitle">
                                <h3 class="section-title"><strong>OUR <span class="lighter">VISION</span></strong></h3>
                                <p class="lead">
                                    {this.ngo.vision}
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box wow zoomIn" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                <img src={this.ngo.photos.slice(1,2)} alt=""></img>
                                <h3>OUR<br/>MISSION</h3>
                                <div class="text-center">
                                    <h5>
                                        { this.ngo.mission.map(m => (
                                        <p> { m } </p>
                                    )) }
                                    </h5>

                                    {/* <p>
                                        I will place all the necessary content for this event here, including where they can register, join, attend &amp; so on.
                                    </p>
                                    <p>
                                        If not enough room, I will link to learn more, a new event page dedicated.
                                    </p>
                                    <p>
                                        Yap. Really looking goody awesome!
                                    </p> */}
                                    <p class="text-center">
                                        <button type="button" class="btn btn-info btn-md"><a href="#">Learn More</a></button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.1s">
                                <span class="glyphicon glyphicon-stats"></span>
                                <h3>We care for</h3><br/>
                                <p>
                                { this.ngo.sdg.slice(0, 3).map(s => (
            
                                <div >
                                    {/* <span>
                                        <img src={s.photo.url}/>
                                    </span> */}
                                    <div style={{ 'padding-left': '4px' }}>
                                        <h4> { s.name }</h4>
                                        <p> { s.description }</p>
                                        { /*
                                        <p><a href="#">Learn More</a></p>
                                           */ }
                                    </div>
                                </div>

                            
                            )) }

                                </p><br/>
                                <button type="button" class="btn btn-info btn-md"><a href="#">Learn More</a></button>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="glyphicon glyphicon-tree-deciduous"></span>
                                <h3>Have a look!</h3><br/>
                                {/* <h3>195 Concerts</h3>
                                <p>
                                    Nullam posuere, libero id interdum hendrerit, tortor nisl consectetur elit.
                                </p>
                                <button type="button" class="btn btn-info btn-md"><a href="#">Learn More</a></button> */}
                                <iframe style={{ 'width': '100%', 'min-height': '320px' }} src={`https://www.youtube.com/embed/${this.ngo.video.url.split('?v=')[1]}`} frameborder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>
                        {/* <div class="col-md-4 col-sm-6">
                            <div class="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <span class="glyphicon glyphicon-heart"></span>
                                <h3>268 Sponsors</h3>
                                <p>
                                    Nullam posuere, libero id interdum hendrerit, tortor nisl consectetur elit.
                                </p>
                                <button type="button" class="btn btn-info btn-md"><a href="#">Learn More</a></button>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.4s">
                                <span class="glyphicon glyphicon-usd"></span>
                                <h3>$5.647 Donated</h3>
                                <p>
                                    Nullam posuere, libero id interdum hendrerit, tortor nisl consectetur elit.
                                </p>
                                <button type="button" class="btn btn-info btn-md"><a href="#">Learn More</a></button>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
        <charity-footer ngo={this.ngo}></charity-footer>
        </ion-content>

);

    }

}
