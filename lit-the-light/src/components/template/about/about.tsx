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
                                <h3>OUR<br/>MISSION</h3><br/>
                                <div class="text-center">
                                    <h5>
                                        { this.ngo.mission.map(m => (
                                        <p> { m } </p>
                                        
                                    )) }
                                    <br/>
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
                                    <br/>
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
                                        <p> { s.description }</p><br/>
                                        { /*
                                        <p><a href="#">Learn More</a></p>
                                           */ }
                                    </div>
                                </div>

                            
                            )) }

                                </p>
                                <button type="button" class="btn btn-info btn-md"><a href="#">Learn More</a></button>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="service-box wow flipInY" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                <span class="glyphicon glyphicon-tree-deciduous"></span>
                                <h3>Have a look!</h3><br/>
                                
                                <iframe style={{ 'width': '100%', 'min-height': '320px' }} src={`https://www.youtube.com/embed/${this.ngo.video.url.split('?v=')[1]}`} frameborder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="container mt-2">
                    <br/><br/>
            <h3 class="section-title text-center"><strong>OUR <span class="lighter">Team</span></strong></h3><br/>
							


  { this.ngo.team.length > 0 ?
  <div class="col-md-12 text-center" data-wow-duration="1.5s" data-wow-delay="0.2s">
  {this.ngo.team.slice(0, 8).map(m => (
    <div class="col-md-4 service-block col-sm-6">
      <div class="card card-block">
    <a href={m.link}><img src= {m.photo.url}  alt="media 1"/></a>
        <h2 class="card-title mt-3 mb-3">{ m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...' }</h2>
        <p class="card-text">{ m.role.length < 60 ? m.role : m.role.substring(0, 60) + '...' } </p> 
            <p  >

                { m.reachOut.facebook.length !== 0 ?
                    <a href={m.reachOut.facebook}><i class="lead fab fa-facebook-f"></i></a>
                : null }

                { m.reachOut.twitter.length !== 0 ?
                    <a href={m.reachOut.twitter}><i class="lead fab fa-twitter"></i></a>
                : null }

                { m.reachOut.instagram.length !== 0 ?
                    <a href={m.reachOut.instagram}><i class="lead fab fa-instagram"></i></a>
                : null }

                { m.reachOut.linkedin.length !== 0 ?
                    <a href={m.reachOut.linkedin}><i class="lead fab fa-linkedin"></i></a>
                : null }

                { m.reachOut.youtube.length !== 0 ?
                    <a href={m.reachOut.youtube}><i class="lead fab fa-youtube"></i></a>
                : null }

            </p>

        {/* <span class="text-center"> { new Date(m.date._seconds * 1000).toLocaleDateString("en-US") } </span> */}
      </div>
    </div> )) }
  </div>: null }
  
</div>
            </div>
        </section>
        <charity-footer ngo={this.ngo}></charity-footer>
        </ion-content>

);

    }

}
