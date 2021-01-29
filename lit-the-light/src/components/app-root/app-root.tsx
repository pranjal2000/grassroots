import { Component, h } from '@stencil/core';

@Component({
    tag: 'app-root',
    styleUrl: 'app-root.css',
})
export class AppRoot {
    render() {
        return (
            <ion-app>
                <ion-router useHash={false}>
                    <ion-route url="/" component="app-home" />
                    <ion-route url="/about" component="charity-about" />
                    {/* <ion-route url="/about/press-coverage" component="charity-press-coverage" /> */}
                    {/* <ion-route url="/about/legal" component="charity-legal" /> */}
                    <ion-route url="/contact" component="charity-contact" />
                    <ion-route url="/donate" component="charity-donate" />
                    <ion-route url="/projects" component="charity-projects" />
                    {/* <ion-route url="/projects/:projectSlug" component="charity-projects-detail" />
                    <ion-route url="/volunteer" component="charity-volunteer" /> */}
                </ion-router>
                <ion-nav />
            </ion-app>
        );
    }
}
