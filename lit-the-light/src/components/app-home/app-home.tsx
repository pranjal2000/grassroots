import { Component, h, Prop } from '@stencil/core';
import * as ngo                 from     '../../assets/data/ngo.json';
//var json = require('./calls.json');
@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @Prop() ngo                 :   any                 =   ngo;
  
  
  render() {
    var img = 'url(' + this.ngo.photos[0] + ')';
    var img2 = 'url(' + this.ngo.photos[1] + ')';
    return [
      <ion-content>
      <section id="hero" class="section">
      <charity-header ngo={this.ngo}></charity-header> 
      {/* fill in ngo = {} */}
  
    
  
  <div class="container cvr " style ={{'background-image': img}} >
    
      <div class="row">
          <div class="col-md-5">
              <div class="herotext">
                  <h1 class="wow bounceInDown" data-wow-duration="1s" data-wow-delay="0.1s">{this.ngo.name}</h1>
                  <p class="lead wow zoomIn" data-wow-duration="2s" data-wow-delay="0.5s">
                    { this.ngo.vision }
                  </p>
                  <p>
                      <a href="/projects" class="btn btn-default btn-lg wow fadeInLeft" role="button"> Our Projects </a> &nbsp; <a href="/donate" class="btn btn-default btn-lg wow fadeInRight" role="button">Donate</a>
                  </p>
              </div>
          </div>
          
      </div>

  </div>
  <br/><br/><br/>
  <div class="container" style ={{'background-image': img2}} >
                        <div class="row">
                            <div class="col-md-4 col-md-offset-1">
                                <div class="row">
                                    <div class="col-md-12 text-center service-box">
                                        <h2> Why Volunteer here? </h2>
                                    </div>
                                </div>
                                { this.ngo.whyVolunteerHere.slice(0, 3).map(w => (
                                    <div class="caption text-center service-box">
                                        <h4>
                                            { w.text }
                                        </h4>
                                    </div>
                                )) }
                            </div>

                            <div class="col-md-4 col-md-offset-2">
 
                                <div class="row">
                                    <div class="col-md-12 text-center service-box">
                                        <h2> Why your help matters? </h2>
                                    </div>
                                </div>
                                { this.ngo.whyHelpMatters.slice(0, 3).map(w => (
                                    <div class="caption text-center service-box">
                                        <h4>
                                            { w.text }
                                        </h4>
                                    </div>
                                )) }
                                                           
                            
                            </div>
                        </div>

                    </div>
                    <br/>

                    <div class="container mt-2">
  <div class=" text-center service-box wow ">
							<h3 class="section-title">Media</h3>
							
						</div>

  { this.ngo.media.length > 0 ?
  <div class="col-md-12 text-center service-box">
  {this.ngo.media.slice(0, 3).map(m => (
    <div class="col-md-4 col-sm-4">
      <div class="card card-block">
    <a href={m.link}><img src= {m.photo.url}  alt="media 1"/></a>
        <h5 class="card-title mt-3 mb-3">{ m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...' }</h5>
        <p class="card-text">{ m.description.length < 60 ? m.description : m.description.substring(0, 60) + '...' } </p> 
        {/* <span class="text-center"> { new Date(m.date._seconds * 1000).toLocaleDateString("en-US") } </span> */}
      </div>
    </div> )) }
  </div>: null }
  <div class="row">
  { this.ngo.media.length > 0 ?
  <div class="col-md-12 text-center service-box">
  {this.ngo.media.slice(2, 5).map(m => (
    <div class="col-md-4 col-sm-4">
      <div class="card card-block">
    <a href={m.link}><img src= {m.photo.url}  alt="media 1"/></a>
        <h5 class="card-title mt-3 mb-3">{ m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...' }</h5>
        <p class="card-text">{ m.description.length < 60 ? m.description : m.description.substring(0, 60) + '...' } </p> 
        {/* <span class="text-center"> { new Date(m.date._seconds * 1000).toLocaleDateString("en-US") } </span> */}
      </div>
    </div> )) }
  </div>: null }
  </div>
  
</div>

  </section>

  <charity-footer ngo={this.ngo}></charity-footer>
  </ion-content>
  
    ];
  }
}
