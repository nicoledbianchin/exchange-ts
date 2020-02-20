declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

interface SvgrComponent
  extends React.StatelessComponent<React.SVGAttributes<SVGElement>> {}

declare module '*.svg' {
  const url: string;

  export default url;
  export const ReactComponent: SvgrComponent;
}

declare module 'vanilla-text-mask' {
  export default function(options: any): { destroy: () => void };
}

declare module 'pickmeup' {
  export interface Instance {
    hide: () => void;
    show: () => void;
    update: () => void;
    destroy: () => void;
    set_date: (date: Date) => void;
  }

  interface Defaults {
    instance_template(options: any): string;
    instance_content_template(elements: Element[], className?: string): Element[];
  }

  interface Prototype {
    (element: Element, options: any): Instance;
    defaults: Defaults;
  }

  const pickmeup: Prototype;

  export default pickmeup;
}
