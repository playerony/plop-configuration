import { IExampleComponentProps } from './example-component.types';

import './example-component.styles.scss';

export const ExampleComponent = ({}: IExampleComponentProps): JSX.Element => {
  return (
    <div className="example-component-wrapper">
      ExampleComponent
    </div>
  );
};
