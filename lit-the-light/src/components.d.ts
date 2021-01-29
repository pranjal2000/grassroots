/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
        "ngo": any;
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface CharityAbout {
        "ngo": any;
    }
    interface CharityContact {
        "ngo": any;
    }
    interface CharityFooter {
        "ngo": any;
    }
    interface CharityHeader {
        "ngo": any;
    }
    interface CharityHome {
    }
    interface CharityProjects {
        "ngo": any;
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCharityAboutElement extends Components.CharityAbout, HTMLStencilElement {
    }
    var HTMLCharityAboutElement: {
        prototype: HTMLCharityAboutElement;
        new (): HTMLCharityAboutElement;
    };
    interface HTMLCharityContactElement extends Components.CharityContact, HTMLStencilElement {
    }
    var HTMLCharityContactElement: {
        prototype: HTMLCharityContactElement;
        new (): HTMLCharityContactElement;
    };
    interface HTMLCharityFooterElement extends Components.CharityFooter, HTMLStencilElement {
    }
    var HTMLCharityFooterElement: {
        prototype: HTMLCharityFooterElement;
        new (): HTMLCharityFooterElement;
    };
    interface HTMLCharityHeaderElement extends Components.CharityHeader, HTMLStencilElement {
    }
    var HTMLCharityHeaderElement: {
        prototype: HTMLCharityHeaderElement;
        new (): HTMLCharityHeaderElement;
    };
    interface HTMLCharityHomeElement extends Components.CharityHome, HTMLStencilElement {
    }
    var HTMLCharityHomeElement: {
        prototype: HTMLCharityHomeElement;
        new (): HTMLCharityHomeElement;
    };
    interface HTMLCharityProjectsElement extends Components.CharityProjects, HTMLStencilElement {
    }
    var HTMLCharityProjectsElement: {
        prototype: HTMLCharityProjectsElement;
        new (): HTMLCharityProjectsElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "charity-about": HTMLCharityAboutElement;
        "charity-contact": HTMLCharityContactElement;
        "charity-footer": HTMLCharityFooterElement;
        "charity-header": HTMLCharityHeaderElement;
        "charity-home": HTMLCharityHomeElement;
        "charity-projects": HTMLCharityProjectsElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
        "ngo"?: any;
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface CharityAbout {
        "ngo"?: any;
    }
    interface CharityContact {
        "ngo"?: any;
    }
    interface CharityFooter {
        "ngo"?: any;
    }
    interface CharityHeader {
        "ngo"?: any;
    }
    interface CharityHome {
    }
    interface CharityProjects {
        "ngo"?: any;
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "charity-about": CharityAbout;
        "charity-contact": CharityContact;
        "charity-footer": CharityFooter;
        "charity-header": CharityHeader;
        "charity-home": CharityHome;
        "charity-projects": CharityProjects;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "charity-about": LocalJSX.CharityAbout & JSXBase.HTMLAttributes<HTMLCharityAboutElement>;
            "charity-contact": LocalJSX.CharityContact & JSXBase.HTMLAttributes<HTMLCharityContactElement>;
            "charity-footer": LocalJSX.CharityFooter & JSXBase.HTMLAttributes<HTMLCharityFooterElement>;
            "charity-header": LocalJSX.CharityHeader & JSXBase.HTMLAttributes<HTMLCharityHeaderElement>;
            "charity-home": LocalJSX.CharityHome & JSXBase.HTMLAttributes<HTMLCharityHomeElement>;
            "charity-projects": LocalJSX.CharityProjects & JSXBase.HTMLAttributes<HTMLCharityProjectsElement>;
        }
    }
}