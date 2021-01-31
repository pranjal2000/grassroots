import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../assets/data/ngo.json';

@Component({
    tag                         :   'charity-projects',
    styleUrl                    :   'projects.css',
})
export class CharityProjects {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Projects :: Constructor');
    }

    async componentWillLoad() {
        console.log('Projects :: Component will load');
    }

    async componentDidLoad() {
        console.log('Projects :: Component did load');
    }

    render() {

        if(!this.ngo) return '';

        return (
<ion-content>
  <charity-header ngo={this.ngo}></charity-header>
  <section id="gallery" class="parallax section prjct1">
    <div class="wrapsection">
      <div class="parallax-overlay prjct2"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 sol-sm-12">
            <div class="maintitle">
              <h3 class="section-title">Project Gallery</h3>
              <p class="lead wow flipInX">
                Have a look at your past efforts, see how much fun we have while helping people. Join our community
                today!
              </p>
            </div>
          </div>
          {/* { this.ngo.projects.length > 0 ?
          <div class="col-md-4">
            <a href="#">
              <img src={this.ngo.projects.photo.url[0]} alt="" class="image-responsive" />
              <div class="description">
                <span class="caption">{this.ngo.projects[0].name}</span>
                <span class="camera"><i class="fa fa-camera"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>

          </div> :null } */}






          <div class="col-md-4">
            <a href={this.ngo.projects[0].link} title="This is the description">
              <img src={this.ngo.projects[0].photo.url} alt="" class="image-responsive" />
              <div class="description">
                <span class="caption">{this.ngo.projects[0].name}</span>
                <span class="camera"><i class="fa fa-camera"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href={this.ngo.projects[1].link} title="This is the description">
              <img src={this.ngo.projects[1].photo.url} alt="" class="image-responsive" />
              <div class="description">
                <span class="caption">{this.ngo.projects[1].name}</span>
                <span class="camera"><i class="fa fa-link"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href={this.ngo.projects[2].link} title="This is the description">
              <img src={this.ngo.projects[2].photo.url} alt="" class="image-responsive" />
              <div class="description">
                <span class="caption">{this.ngo.projects[2].name}</span>
                <span class="camera"><i class="fa fa-heart"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href={this.ngo.projects[3].link} title="This is the description">
              <img src={this.ngo.projects[3].photo.url} alt="" class="image-responsive" />
              <div class="description">
                <span class="caption">{this.ngo.projects[3].name}</span>
                <span class="camera"><i class="fa fa-tachometer"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href={this.ngo.projects[4].link} title="This is the description">
              <img src={this.ngo.projects[4].photo.url} alt="" class="image-responsive" />
              <div class="description">
                <span class="caption">{this.ngo.projects[4].name}</span>
                <span class="camera"><i class="fa fa-microphone"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
          </div>
          <div class="col-md-4">
            <a href={this.ngo.projects[5].link} title="This is the description">
              <img src={this.ngo.projects[5].photo.url} alt="" class="image-responsive" />
              <div class="description">
                <span class="caption">{this.ngo.projects[5].name}</span>
                <span class="camera"><i class="fa fa-coffee"></i></span>
                <div class="clearfix"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>



  <charity-footer ngo={this.ngo}></charity-footer>
</ion-content>

        );

    }

}
