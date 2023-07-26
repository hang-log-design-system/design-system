export type Size = 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';

type AnyComponent = React.ComponentType<any>;
type KnownTarget = keyof JSX.IntrinsicElements | AnyComponent;
type StyledTarget<R> = R extends keyof JSX.IntrinsicElements ? R : AnyComponent;
type Runtime = keyof JSX.IntrinsicElements | AnyComponent;

export type PolymorphicComponentProps<
  R extends Runtime,
  E extends StyledTarget<R>,
  P extends object
> = {
  as?: P extends { as?: infer As } ? As : E;
};
