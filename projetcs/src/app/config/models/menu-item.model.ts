interface InternalLink {

  label: string;

  icon: string;

  routerLink: string[];

}



interface ExternalLink {

  label: string;

  icon: string;

  url: string[];

  target: string;

}



type Items = InternalLink | ExternalLink;



export interface MenuItems {

  label: string;

  items: Items[];

}
