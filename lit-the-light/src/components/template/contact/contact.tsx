import content from '*?format=text';
import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../assets/data/ngo.json';

@Component({
    tag: 'charity-contact',
    styleUrl: 'contact.css',
})
export class CharityContact {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Contact :: Constructor');
    }

    async componentWillLoad() {
        console.log('Contact :: Component will load');
    }

    async componentDidLoad() {
        console.log('Contact :: Component did load');
    }

    render() {

        return (
<ion-content>
  <charity-header ngo={this.ngo}></charity-header>

  <section id="contactarea" class="parallax section ctc1">
    <div class="wrapsection">
      <div class="parallax-overlay ctc2"></div>
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div class="maintitle">
              <h3 class="section-title text-left">Reach out</h3>
              <ul class="lead text-left wow fadeIn animated"><br /><br />
                <li><i class="fas fa-map-marker-alt"></i> { this.ngo.address } </li><br />
                <li><i class="fas fa-phone-alt"></i> +91 { this.ngo.reachOut.phone1 } </li><br />
                <li><i class="fas fa-envelope"></i><a href="#" class="lead">{ this.ngo.reachOut.email } </a></li><br />
                <li><i class="fas fa-globe-africa"></i><a href="#" class="lead">{ this.ngo.reachOut.website } </a></li>
              </ul>

            </div>
          </div>
          <div class="col-md-7">
            <div class="maintitle">
              <h3 class="section-title">Get in Touch</h3>
              <p class="lead">
                If you have questions about our events, don't hesitate to send us your message. This is a real working
                contact form, test it!
              </p>
            </div>
            <form id="contact" name="contact" method="post" class="text-left">
              <fieldset>
                <div class="row">
                  <div class="col-md-4 wow fadeIn animated animated" data-wow-delay="0.1s" data-wow-duration="2s">
                    <label htmlfor="name">Name<span class="required">*</span></label>
                    <input type="text" name="name" id="name" value="" required />
                  </div>
                  <div class="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
                    <label htmlfor="email">Email<span class="required">*</span></label>
                    <input type="text" name="email" id="email" value="" required />
                  </div>
                  <div class="col-md-4 wow fadeIn animated" data-wow-delay="0.3s" data-wow-duration="2s">
                    <label htmlfor="phone">Phone</label>
                    <input type="text" name="phone" id="phone" value="" />
                  </div>
                </div>
                <div class="wow fadeIn animated ctc3" data-wow-delay="0.3s" data-wow-duration="1.5">
                  <label htmlfor="message">Message<span class="required">*</span></label>
                  <textarea name="message" id="message" required></textarea>
                </div>
                <div class="wow fadeIn animated" data-wow-delay="0.3" data-wow-duration="1.5s">
                  <input id="submit" type="submit" name="submit" value="Send" />
                </div>
              </fieldset>
            </form>

            <div id="success">
              <p class="contactalert">
                Your message was sent succssfully! I will be in touch as soon as I can.
              </p>
            </div>
            <div id="error">
              <p class="contactalert">
                Something went wrong, try refreshing and submitting the form again.
              </p>
            </div>
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
