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
                      <a href="/projects" class="btn btn-default btn-lg wow fadeInLeft" role="button"> View Projects </a> &nbsp; <a href="/donate" class="btn btn-default btn-lg wow fadeInRight" role="button">Donate</a>
                  </p>
              </div>
          </div>
          <div class="col-md-7">
          </div>
      </div>
  </div>
  </section>

  <charity-footer ngo={this.ngo}></charity-footer>
  </ion-content>
  
    ];
  }
}
